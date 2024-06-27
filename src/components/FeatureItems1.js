import PropTypes from "prop-types";
import "./FeatureItems1.css";

const FeatureItems1 = ({
  className = "",
  heading4RocketDelivery,
  weStriveToCompleteAll,
  customerOrdersWithin15,
  minutes,
}) => {
  return (
    <div className={`feature-items1 ${className}`}>
      <div className="heading-4-rocket-delivery-wrapper">
        <h3 className="heading-41">{heading4RocketDelivery}</h3>
      </div>
      <div className="we-strive-to-container">
        <p className="we-strive-to">{weStriveToCompleteAll}</p>
        <p className="customer-orders-within">{customerOrdersWithin15}</p>
        <p className="minutes">{minutes}</p>
      </div>
    </div>
  );
};

FeatureItems1.propTypes = {
  className: PropTypes.string,
  heading4RocketDelivery: PropTypes.string,
  weStriveToCompleteAll: PropTypes.string,
  customerOrdersWithin15: PropTypes.string,
  minutes: PropTypes.string,
};

export default FeatureItems1;
