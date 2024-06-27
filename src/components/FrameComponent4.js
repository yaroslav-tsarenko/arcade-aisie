import FeatureItems from "./FeatureItems";
import FeatureItems1 from "./FeatureItems1";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`features-container-wrapper ${className}`}>
      <div className="features-container">
        <FeatureItems
          heading4LocalPayment="Local Payment"
          weAcceptPaymentInUp="We accept payment in up"
          to70LocalCurrencies="to 70+ local currencies"
          alongsideMazorCredit="alongside Mazor Credit"
          cards="Cards."
        />
        <FeatureItems
          heading4LocalPayment="100% Satisfaction"
          weAcceptPaymentInUp="We strive to please our"
          to70LocalCurrencies="customers in every way."
          alongsideMazorCredit="Your satisfaction is 100%"
          cards="guaranteed."
        />
        <FeatureItems1
          heading4RocketDelivery="Rocket Delivery"
          weStriveToCompleteAll="We strive to complete all"
          customerOrdersWithin15="customer orders within 15"
          minutes="minutes."
        />
        <FeatureItems1
          heading4RocketDelivery="Dedicated Support"
          weStriveToCompleteAll="We have a dedicated"
          customerOrdersWithin15="support team on hand to"
          minutes="assist you in any situation."
        />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
