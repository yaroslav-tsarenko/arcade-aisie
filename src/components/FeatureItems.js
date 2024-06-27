import PropTypes from "prop-types";
import "./FeatureItems.css";

const FeatureItems = ({
  className = "",
  heading4LocalPayment,
  weAcceptPaymentInUp,
  to70LocalCurrencies,
  alongsideMazorCredit,
  cards,
}) => {
  return (
    <div className={`feature-items ${className}`}>
      <div className="feature-headings">
        <h3 className="heading-4">{heading4LocalPayment}</h3>
      </div>
      <div className="we-accept-payment-container">
        <p className="we-accept-payment">{weAcceptPaymentInUp}</p>
        <p className="to-70-local">{to70LocalCurrencies}</p>
        <p className="alongside-mazor-credit">{alongsideMazorCredit}</p>
        <p className="cards">{cards}</p>
      </div>
    </div>
  );
};

FeatureItems.propTypes = {
  className: PropTypes.string,
  heading4LocalPayment: PropTypes.string,
  weAcceptPaymentInUp: PropTypes.string,
  to70LocalCurrencies: PropTypes.string,
  alongsideMazorCredit: PropTypes.string,
  cards: PropTypes.string,
};

export default FeatureItems;
