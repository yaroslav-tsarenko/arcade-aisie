import NavBar from "../components/NavBar";
import SignInForm from "../components/SignInForm";
import FooterDesktop from "../components/FooterDesktop";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <NavBar />
      <SignInForm />
      <FooterDesktop />
    </div>
  );
};

export default SignInPage;
