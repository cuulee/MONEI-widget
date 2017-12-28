[![Build Status](https://travis-ci.org/MONEI/MONEI-widget.svg?branch=master)](https://travis-ci.org/MONEI/MONEI-widget2)

# [MONEI](https://monei.net) Widget v2

An easy way to accept payments from your customers. Embed this widget on your website, blog or online store.

## Install

From CDN

```html
<script src="https://widget.monei.net/widget2.js"></script>
```

From [npm](https://npmjs.org)

```sh
npm install monei-widget2
```

## Quick start

Generate the HTML code for your widget in [MONEI dashboard](https://dashboard.monei.net/sub-accounts)

Insert the code where you want your widget to show up.

```html
<div class="monei-widget"
  data-amount="100"
  data-currency="eur"
  data-token="{TOKEN}"
  data-redirect-url="http://yoursite.com/monei-callback"
></div>
```

If you are using npm module: `import 'monei-widget'`

## Manual setup

You can disable auto-setup and use `setupAll()` to setup your widgets manually:

```javascript
// Example (ES2015 and jQuery)
import moneiWidget from 'monei-widget';
moneiWidget.disableAutoSetup();

$(() => {
  moneiWidget.setupAll();
});
```

## Overriding options

You can setup a particular widget with `setup(element, options)` and override some `data-` attributes with a JavaScript object:

```javascript
// Example (ES2015 and jQuery)
import moneiWidget from 'monei-widget';
moneiWidget.disableAutoSetup();

$(() => {
  moneiWidget.setup('widget_element_id', {
    name: 'Gone With the Wind',
    description: 'What a lovely story!',
    checkoutText: 'Pay with Card',
    customer: {
      givenName: 'John',
      surname: 'Doe'
    },
    billing: {
      street1: 'Street 1',
      street2: 'Street 2',
      country: 'ES',
      city: 'Malaga',
      state: 'Malaga',
      postcode: '12345'
    },
    customParameters: {
      foo: 'bar'
    }
  });
});
```

## Use own button styling

Set `noEnhance` to `true` to disable default styling:

```html
<a href="#" class="monei-widget" data-no-enhance="true" ...>Donate $100</a>
```

## Subscription mode

To use the subscription mode, you need to specify `planId`. `amount` and `currency` are not needed in this case

```html
<div class="monei-widget"
  data-plan-id="my-plan"
  data-token="{TOKEN}"
  data-redirect-url="http://yoursite.com/monei-callback"
></div>
```

## Demo

https://widget.monei.net/index.html

## List of available options

You can either use `data-dashed-case` HTML attributes or a JavaScript object with `camelCase` options as `setup()` second parameter.

| Option                           | Required | Default                        | Details                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | -------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| amount                           | \*       |                                |                                                                                                                                                                                                                                                                                                                                |
| currency                         | \*       |                                |                                                                                                                                                                                                                                                                                                                                |
| token                            | \*       |                                |                                                                                                                                                                                                                                                                                                                                |
| redirectUrl                      | \*       |                                | The transaction `id` and `token` will be passed to this URL                                                                                                                                                                                                                                                                    |
| popup                            |          | `true`                         | Enables popup mode for the widget                                                                                                                                                                                                                                                                                              |
| planId                           |          |                                | Subscription plan id to activate subscription mode                                                                                                                                                                                                                                                                             |
| paymentType                      |          | `DB`                           | `PA` (Preauthorization) or `DB` (Debit)                                                                                                                                                                                                                                                                                        |
| name                             |          |                                | Product name in popup header                                                                                                                                                                                                                                                                                                   |
| description                      |          |                                | Product description in popup header                                                                                                                                                                                                                                                                                            |
| descriptor                       |          |                                | Descriptor that will be shown in customer's bank statement                                                                                                                                                                                                                                                                     |
| checkoutText                     |          | `Pay {amount}`                 | Checkout button text in popup mode, `{amount}` will be replaced with amount value with currency                                                                                                                                                                                                                                |
| submitText                       |          | `Pay now`                      | Submit button text, `{amount}` will be replaced with amount value with currency                                                                                                                                                                                                                                                |
| brands                           |          | `'VISA MASTER'`                | String with space as delimiter. Available options: `VISA MASTER MAESTRO JCB`                                                                                                                                                                                                                                                   |
| noEnhance                        |          | `false`                        | Disables default styling                                                                                                                                                                                                                                                                                                       |
| showCardHolder                   |          | `false`                        | Shows cardholder name input                                                                                                                                                                                                                                                                                                    |
| showEmail                        |          | `true`                         | Shows email input (Recommended. MONEI identifies customers by email. If `customer.email` is provided input will be hidden automatically                                                                                                                                                                                        |
| testMode                         |          | `false`                        | Enables test mode. (You need to pass test mode token)                                                                                                                                                                                                                                                                          |
| customer                         |          |                                | You can pass an information about your customer to a widget. It will be saved in the transaction                                                                                                                                                                                                                               |
| billing                          |          |                                | You can pass an information about customer's billing address to a widget. It will be saved in the transaction                                                                                                                                                                                                                  |
| customParameters                 |          |                                | You can pass any additional information to a widget. It will be saved in the transaction (each key will be prefixed with `SHOPPER_`)                                                                                                                                                                                           |
| locale                           |          | `en-US`                        | Sets the language/country of the payment forms. Expects ISO 639-1 for languages and ISO 3166-1 alpha-2 for countries.                                                                                                                                                                                                          |
| autofocus                        |          |                                | Sets focus to the selected input/select element on the payment page upon loading (`autofocus : 'customer.email'`)                                                                                                                                                                                                              |
| autofocus                        |          |                                | Sets focus to the selected input/select element on the payment page upon loading (`autofocus : 'customer.email'`)                                                                                                                                                                                                              |
| onReady                          |          |                                | Triggers when all payment forms are ready                                                                                                                                                                                                                                                                                      |
| threeDIframeSize                 |          | `{width: 100%, height: 580px}` | Sets size of the 3D secure iframe. This iframe will only be used in case a shopper has to enter 3D secure credentials on the bank's page.                                                                                                                                                                                      |
| showCVVHint                      |          |                                | If set to true then the credit card form will display a hint on where the CVV is located when the mouse is hovering over the CVV field.                                                                                                                                                                                        |
| forceCardHolderEqualsBillingName |          |                                | By default the card.holder is displayed as one field. If this option is set to true then the form displays a field for the given name and a separate field for the surname. The values entered here will be submitted both as card.holder and as customer.givenName and customer.surname. Only works id `showCardHolder: true` |
| billingAddress                   |          |                                | Option to display the billing address fields.                                                                                                                                                                                                                                                                                  |
| mandatoryBillingFields           |          |                                | Describe which billing fields cannot be empty. This option needs to be used with billingAddress option. ( `{country: true, state: true, city: true}`)                                                                                                                                                                          |
| onBeforeSubmitCard               |          |                                | Triggers before card payment submission. Context (this) is the form. Overrides the internal submit function. Do event.preventDefault() or return false to cancel the payment submit action. `onBeforeSubmitCard: function(event){ /* function here */}`                                                                        |
| onAfterSubmit                    |          |                                | Triggers after the payment submission.                                                                                                                                                                                                                                                                                         |
| onLoadThreeDIframe               |          |                                | Triggers when the 3D secure targetIframe has loaded                                                                                                                                                                                                                                                                            |
| spinner                          |          |                                | Sets the style of the loading spinner. We use the spin.js library to display the spinner. The full list of settings can be found on internet if you search for spin.js.                                                                                                                                                        |
| showLabels                       |          | `false`                        | Shows or hides input labels.                                                                                                                                                                                                                                                                                                   |
| showPlaceholders                 |          | `true`                         | Shows or hides input placeholders.                                                                                                                                                                                                                                                                                             |
| labels                           |          |                                | Overrides labels from the [list of available labels](https://docs.monei.net/tutorials/integration-guide/widget-api#labels).                                                                                                                                                                                                    |
| errorMessages                    |          |                                | Overrides error messages from the [list of available error messages](https://docs.monei.net/tutorials/integration-guide/widget-api#error_messages).                                                                                                                                                                            |
| onError                          |          |                                | Callback that triggers if an error occurs during checkout.                                                                                                                                                                                                                                                                     |

[More about available fields](/src/widget.js)

## Get the payment status

to get the status of the payment, you should make a `GET` request to the

```
https://api.monei.net/checkouts/{id}?token={token}
```

### IMPORTANT! If you're using subscription mode, you have to call this endpoint to activate the subscription

```
https://api.monei.net/plans/{planId}/subscriptions/payment-status?token={token}&checkoutId={id}
```

you'll get `id` and `token` as a query parameters appended to the **redirect URL**

Read about response structure and avaliable parameters in [documentation](https://docs.monei.net/reference/parameters#response-params)