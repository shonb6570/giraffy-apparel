import "./footer.styles.scss";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content-wrapper">
          <div className="footer-bg"></div>
          <div className="giraffy-icon"></div>
          <div className="footer-logo"></div>
          <div className="footer-links-container">
            <div className="footer-brand-title">
              <p>iraffy Apparel Co.</p>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-nav-links">
                <span className="footer-nav-link">Contact</span>
                <span className="footer-nav-link">Support</span>
                <span className="footer-nav-link">About</span>
                <span className="footer-nav-link">Careers</span>
              </div>
              <hr className="footer-hr-verticle" />
              <div className="social-links">
                <div>
                  <a href="www.twitter.com">
                    <div alt="twitter icon" className="social-icon"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <div className="footer-copyright">
          <p>&#169; Giraffy Apparel Co. &nbsp; {year}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
