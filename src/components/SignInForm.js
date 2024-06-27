import PropTypes from "prop-types";
import "./SignInForm.css";

const SignInForm = ({ className = "" }) => {
  return (
    <section className={`sign-in-form ${className}`}>
      <div className="sign-in-container">
        <div className="sign-in">
          <div className="sign-in-title">
            <div className="sign-in-parent">
              <h1 className="sign-in1">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="input-fields">
              <div className="input-labels">
                <div className="username">Username</div>
                <img
                  className="input-boxes-icon"
                  alt=""
                  src="/input-boxes.svg"
                />
              </div>
              <div className="input-labels1">
                <div className="password">Password</div>
                <img
                  className="input-labels-child"
                  alt=""
                  src="/frame-153-1.svg"
                />
              </div>
              <button className="button4">
                <img className="tag-icon4" alt="" src="/tag-icon1.svg" />
                <div className="button5">Sign In</div>
                <img className="tag-icon5" alt="" src="/tag-icon1.svg" />
              </button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="social-buttons">
              <img
                className="empty-social-buttons"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="empty-social-buttons1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="empty-social-buttons2"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="page-background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

SignInForm.propTypes = {
  className: PropTypes.string,
};

export default SignInForm;
