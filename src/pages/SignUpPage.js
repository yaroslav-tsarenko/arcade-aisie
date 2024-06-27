import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
import FooterDesktop from "../components/FooterDesktop";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <NavBar />
      <section className="signup-form-container-parent">
        <div className="signup-form-container">
          <SignIn />
        </div>
        <img
          className="separator-icon"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <FooterDesktop />
    </div>
  );
};

export default SignUpPage;
