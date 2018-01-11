import {Component} from 'preact';
import Portal from 'preact-portal';
import PaymentForm from '../PaymentForm';
import classNames from './PaymentModal.scss';
import $ from 'cash-dom';

import cx from 'classnames';

class PaymentModal extends Component {
  handleClose = () => {
    this.setState({isActive: false});
    $('body').removeClass(classNames.fixed);
    setTimeout(this.props.onClose.bind(this), 400);
  };

  onError = error => {
    this.props.onError && this.props.onError(error);
    this.setState({isActive: true, isError: true});
  };

  onReady = () => {
    this.props.onReady && this.props.onReady();
    setTimeout(() => {
      $('body').addClass(classNames.fixed);
      this.setState({isActive: true});
    }, 500);
  };

  onLoadThreeDIframe = () => {
    this.props.onLoadThreeDIframe && this.props.onLoadThreeDIframe();
    this.setState({is3DFrame: true});
  };

  render(props, {isActive, is3DFrame, isError}, context) {
    if (!props.isOpen) return null;
    return (
      <Portal into="body">
        <div
          className={cx(classNames.portal, {
            [classNames.active]: isActive
          })}>
          <div className={classNames.container}>
            <div
              className={cx(classNames.modal, {
                [classNames.frame]: is3DFrame,
                [classNames.error]: isError
              })}>
              {(props.name || props.description) && (
                <div className={classNames.header}>
                  {props.name && <div className={classNames.name}>{props.name}</div>}
                  {props.description && (
                    <div className={classNames.description}>{props.description}</div>
                  )}
                </div>
              )}
              <div className={classNames.body}>
                <PaymentForm
                  {...props}
                  className={classNames.paymentForm}
                  onReady={this.onReady}
                  onLoadThreeDIframe={this.onLoadThreeDIframe}
                  onError={this.onError}
                />
              </div>
              <div className={classNames.cancelButton} onClick={this.handleClose}>
                &times;
              </div>
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}

export default PaymentModal;
