import FrameComponent1 from "../components/FrameComponent1";
import Account from "../components/Account";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent1
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <Account />
      <FooterDesktop1 />
    </div>
  );
};

export default AccountPage;
