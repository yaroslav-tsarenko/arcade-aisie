import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <section className={`footer-desktop1 ${className}`}>
      <div className="footer-content1">
        <div className="footer-top">
          <div className="logo-24">
            <img className="logo-icon4" alt="" src="/logo@2x.png" />
            <div className="arcade-aisle4">Arcade Aisle</div>
          </div>
          <div className="explore-a-seamless1">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at Arcade Aisle
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-columns">
            <b className="resources1">Resources</b>
            <div className="products2">Products</div>
            <div className="contact-us2">Contact Us</div>
            <div className="agent-contact2">Agent Contact</div>
            <a className="services2">Services</a>
          </div>
          <div className="footer-links-columns1">
            <b className="legal-pages1">Legal Pages</b>
            <div className="terms-and-condition1">Terms and Condition</div>
            <a className="privacy-policy2">Privacy Policy</a>
            <div className="refund-policy1">Refund Policy</div>
            <div className="cancellation-policy1">Cancellation Policy</div>
          </div>
          <div className="important-links-group">
            <b className="important-links1">IMPORTANT LINKS</b>
            <div className="about-us1">About Us</div>
            <div className="contact-us3">Contact Us</div>
            <div className="agent-contact3">Agent Contact</div>
            <div className="services3">Services</div>
          </div>
        </div>
      </div>
      <div className="footer-menu1">
        <div className="arcade-aisle-all1">
          © 2023 Arcade Aisle. All Rights Reserved.
        </div>
        <div className="legal-menu1">
          <div className="privacy-policy3">Privacy Policy</div>
          <div className="tearms-conditions1">{`Tearms & Conditions`}</div>
        </div>
      </div>
    </section>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
