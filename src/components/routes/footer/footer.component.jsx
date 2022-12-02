import "./footer.styles.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content-wrapper">
                <div className="giraffy-icon"></div>
                <div className="footer-logo"></div>
                <div className="footer-links-container">
                    <div className="footer-brand-title">
                        <p>iraffy Apparel Co.</p>
                    </div>
                    <hr className="footer-hr-horizontal" />
                    <div className="footer-links-wrapper">
                        <div className="footer-nav-links">
                            <div className="footer-nav-link">Contact</div>
                            <div className="footer-nav-link">Support</div>
                            <div className="footer-nav-link">About</div>
                            <div className="footer-nav-link">Careers</div>
                        </div>
                        <hr className="footer-hr-verticle" />
                        <div className="social-links">
                            <div>
                                <a href="www.twitter.com">
                                    <div
                                        alt="twitter icon"
                                        className="social-icon"></div>
                                </a>
                            </div>
                            <div>
                                <a href="www.twitter.com">
                                    <div
                                        alt="twitter icon"
                                        className="social-icon"></div>
                                </a>
                            </div>
                            <div>
                                <a href="www.twitter.com">
                                    <div
                                        alt="twitter icon"
                                        className="social-icon"></div>
                                </a>
                            </div>
                            <div>
                                <a href="www.twitter.com">
                                    <div
                                        alt="twitter icon"
                                        className="social-icon"></div>
                                </a>
                            </div>
                            <div>
                                <a href="www.twitter.com">
                                    <div
                                        alt="twitter icon"
                                        className="social-icon linkedin"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
