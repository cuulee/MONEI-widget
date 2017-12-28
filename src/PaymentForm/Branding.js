const Branding = ({className}) => (
  <div className={className}>
    <span>Powered by</span>{' '}
    <a href="https://monei.net/" target="_blank" className="brand" tabIndex={-1}>
      <img
        src="https://static.monei.net/monei-logo.svg"
        alt="MONEI"
        title="Best payment gateway rates. The perfect solution to manage your digital payments. Get in now!"
      />
    </a>
  </div>
);

export default Branding;
