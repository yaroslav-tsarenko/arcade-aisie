import ContactFields from "./ContactFields";
import PropTypes from "prop-types";
import "./ContactInfo.css";

const ContactInfo = ({ className = "" }) => {
  return (
    <div className={`contact-info ${className}`}>
      <ContactFields
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-details1">
            <img
              className="empty-card-details"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="empty-card-details1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="empty-card-details2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="date-fields">
          <div className="form-field2">
            <input className="mmyy" placeholder="MM/YY" type="text" />
            <img className="icon2" alt="" src="/icon.svg" />
          </div>
          <div className="form-field3">
            <input className="mmyy1" placeholder="MM/YY" type="text" />
            <img className="icon3" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <ContactFields
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
      />
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field4">
          <div className="usa">USA</div>
          <img className="empty-region-icon" alt="" src="/empty-region.svg" />
          <img className="icon4" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="empty-verification-parent">
        <input className="empty-verification" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-info-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <button className="button8">
        <img className="tag-icon8" alt="" src="/tag-icon1.svg" />
        <div className="button9">Pay Now</div>
        <img className="tag-icon9" alt="" src="/tag-icon1.svg" />
      </button>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
