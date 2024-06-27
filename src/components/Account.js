import PropTypes from "prop-types";
import "./Account.css";

const Account = ({ className = "" }) => {
  return (
    <section className={`account ${className}`}>
      <div className="account-container">
        <div className="user-account-container">
          <h2 className="user-account">User Account</h2>
          <div className="header4">
            <div className="your-active-downloads">Your Active Downloads</div>
          </div>
          <div className="cart-row-1">
            <div className="product">
              <img
                className="link-m5xw6z3mmvygyylz-min-30"
                loading="lazy"
                alt=""
                src="/link--m5xw6z3mmvygyylzmin300x300jpg@2x.png"
              />
              <div className="title">
                <div className="google-play-gift">Google Play Gift Card</div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
            </div>
            <div className="download-headers">
              <div className="empty-header">$120.00</div>
              <div className="credits">12 Credits</div>
            </div>
            <div className="download-headers1">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="renewal">
              <div className="renewal-date">
                <div className="next-renewal">Next Renewal</div>
                <div className="april-2024">24 April, 2024</div>
              </div>
              <div className="links">
                <div className="link9">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link10">
                  <img
                    className="icons-block1"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
        </div>
        <div className="user-details">
          <div className="checkout-details4">
            <div className="header5">
              <div className="user-details1">User Details</div>
            </div>
            <div className="information-fields">
              <div className="name">Name</div>
              <div className="darnell-roob">Darnell Roob</div>
            </div>
            <div className="information-fields1">
              <div className="email-address">Email Address</div>
              <div className="darnellroobhotmailcom">
                Darnell.Roob@hotmail.com
              </div>
            </div>
            <div className="information-fields2">
              <div className="plan">Plan</div>
              <div className="basic">Basic</div>
            </div>
            <div className="information-fields3">
              <div className="expiry-date">Expiry Date</div>
              <div className="april-20241">24 April, 2024</div>
            </div>
            <div className="information-fields4">
              <div className="auto-renewal">Auto Renewal</div>
              <div className="on">On</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Account.propTypes = {
  className: PropTypes.string,
};

export default Account;
