import NavBar from "../components/NavBar";
import ContactInfo from "../components/ContactInfo";
import FooterDesktop from "../components/FooterDesktop";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <NavBar />
      <section className="footer-content-parent">
        <div className="footer-content">
          <div className="footer-top">
            <img
              className="empty-footer-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006877@2x.png"
            />
            <div className="footer-note">
              <div className="payment-info">
                <div className="powered-by">{`Powered by `}</div>
                <img
                  className="payment-icons"
                  loading="lazy"
                  alt=""
                  src="/payment-icons@2x.png"
                />
              </div>
              <img
                className="footer-note-child"
                loading="lazy"
                alt=""
                src="/vector-341.svg"
              />
              <div className="legal">Legal</div>
              <div className="refunds">Refunds</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <ContactInfo />
        </div>
      </section>
      <FooterDesktop />
    </div>
  );
};

export default PaymentPage;
