import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`how-we-use-your-information-parent ${className}`}>
      <h1 className="how-we-use-container">
        <ol className="how-we-use-your-information">
          <li>How We Use Your Information</li>
        </ol>
      </h1>
      <div className="information-usage-items">
        <div className="information-usage-types">
          <div className="providing-services">2.1 Providing Services</div>
          <div className="we-use-your">
            We use your information to provide, maintain, and improve our
            services, including server hosting, customer support, and technical
            assistance.
          </div>
        </div>
        <div className="information-usage-types1">
          <div className="communication">2.2 Communication</div>
          <div className="we-may-use1">
            We may use your contact information to send you important updates,
            notifications, and information related to your account or our
            services.
          </div>
        </div>
        <div className="information-usage-types2">
          <div className="analytics">2.3 Analytics</div>
          <div className="we-use-analytics">
            We use analytics tools to analyze usage patterns and trends,
            allowing us to enhance the performance and user experience of our
            services.
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
