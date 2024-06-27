import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "", logo }) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo-21">
            <img className="logo-icon1" alt="" src={logo} />
            <div className="arcade-aisle1">Arcade Aisle</div>
          </div>
          <div className="explore-a-seamless">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at Arcade Aisle
          </div>
        </div>
        <div className="footer-links-container">
          <div className="resource-links">
            <h3 className="resources">Resources</h3>
            <div className="products1">Products</div>
            <div className="contact-us">Contact Us</div>
            <div className="agent-contact">Agent Contact</div>
            <div className="services">Services</div>
          </div>
          <div className="resource-links1">
            <h3 className="legal-pages">Legal Pages</h3>
            <div className="terms-and-condition">Terms and Condition</div>
            <a className="privacy-policy">Privacy Policy</a>
            <div className="refund-policy">Refund Policy</div>
            <div className="cancellation-policy">Cancellation Policy</div>
          </div>
          <div className="important-links-parent">
            <b className="important-links">IMPORTANT LINKS</b>
            <div className="about-us">About Us</div>
            <div className="contact-us1">Contact Us</div>
            <div className="agent-contact1">Agent Contact</div>
            <div className="services1">Services</div>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="arcade-aisle-all">
          © 2023 Arcade Aisle. All Rights Reserved.
        </div>
        <div className="legal-menu">
          <div className="privacy-policy1">Privacy Policy</div>
          <div className="tearms-conditions">{`Tearms & Conditions`}</div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
};

export default FooterDesktop;
