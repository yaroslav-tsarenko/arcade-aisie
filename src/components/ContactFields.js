import PropTypes from "prop-types";
import "./ContactFields.css";

const ContactFields = ({
  className = "",
  contactInformation,
  formLabelPlaceholder,
}) => {
  return (
    <div className={`contact-fields ${className}`}>
      <div className="contact-information">{contactInformation}</div>
      <div className="form-field">
        <input
          className="form-label"
          placeholder={formLabelPlaceholder}
          type="text"
        />
        <img className="icon" alt="" src="/icon.svg" />
      </div>
    </div>
  );
};

ContactFields.propTypes = {
  className: PropTypes.string,
  contactInformation: PropTypes.string,
  formLabelPlaceholder: PropTypes.string,
};

export default ContactFields;
