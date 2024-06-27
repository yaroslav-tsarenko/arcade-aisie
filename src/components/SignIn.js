import PropTypes from "prop-types";
import "./SignIn.css";

const SignIn = ({ className = "" }) => {
  return (
    <div className={`sign-in2 ${className}`}>
      <div className="sign-up-parent">
        <h1 className="sign-up">Sign up</h1>
        <div className="sign-up-to">Sign up to get rewards, and many more</div>
      </div>
      <form className="name-address-username-fields-parent">
        <div className="name-address-username-fields">
          <div className="name-address-username-labels">
            <div className="your-name">Your Name</div>
          </div>
          <div className="email-country-password-labels">
            <input className="email" placeholder="Email" type="text" />
          </div>
        </div>
        <div className="name-address-username-fields1">
          <div className="address-wrapper">
            <div className="address">Address</div>
          </div>
          <div className="country-parent">
            <div className="country">Country</div>
            <img
              className="empty-email-password-fields"
              alt=""
              src="/empty-email-password-fields.svg"
            />
          </div>
        </div>
        <div className="name-address-username-fields2">
          <div className="username-parent">
            <div className="username1">Username</div>
            <img className="empty-name-field" alt="" src="/input-boxes.svg" />
          </div>
          <div className="password-parent">
            <div className="password1">Password</div>
            <img className="frame-icon" alt="" src="/frame-153-1.svg" />
          </div>
        </div>
        <button className="button6">
          <img className="tag-icon6" alt="" src="/tag-icon1.svg" />
          <div className="button7">Sign Up</div>
          <img className="tag-icon7" alt="" src="/tag-icon1.svg" />
        </button>
      </form>
      <div className="or-sign-up">or, sign up with</div>
      <div className="social-buttons-parent">
        <img
          className="social-buttons-icon"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-buttons-icon1"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-buttons-icon2"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  className: PropTypes.string,
};

export default SignIn;
