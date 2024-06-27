import FrameComponent1 from "../components/FrameComponent1";
import BillingWrapper from "../components/BillingWrapper";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent1
        checkout="Checkout"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <BillingWrapper />
      <FooterDesktop1 />
    </div>
  );
};

export default CheckoutPage;
