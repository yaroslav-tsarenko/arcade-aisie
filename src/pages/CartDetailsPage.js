import FrameComponent from "../components/FrameComponent";
import CartItemContainer from "../components/CartItemContainer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent />
      <section className="cart-item-container-wrapper">
        <CartItemContainer />
      </section>
      <section className="footer-desktop">
        <div className="footer-container">
          <div className="branding">
            <div className="logo-2">
              <img className="logo-icon" alt="" src="/logo@2x.png" />
              <div className="arcade-aisle">Arcade Aisle</div>
            </div>
            <div className="explore-a-seamless">
              Explore a seamless blend of hosting services and crypto mining
              capabilities at Arcade Aisle
            </div>
          </div>
          <div className="footer-links">
            <div className="link-categories">
              <b className="resources">Resources</b>
              <div className="products">Products</div>
              <div className="contact-us">Contact Us</div>
              <div className="agent-contact">Agent Contact</div>
              <a className="services">Services</a>
            </div>
            <div className="link-categories1">
              <b className="legal-pages">Legal Pages</b>
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
      </section>
    </div>
  );
};

export default CartDetailsPage;
