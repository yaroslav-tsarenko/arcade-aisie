import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  checkout,
  viewOrEditYourCartBeforeC,
}) => {
  return (
    <section className={`nav-bar-container ${className}`}>
      <header className="nav-bar2">
        <div className="container8">
          <div className="logo-23">
            <img
              className="logo-icon3"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <div className="arcade-aisle-logo">
              <div className="arcade-aisle3">Arcade Aisle</div>
            </div>
          </div>
          <div className="nav-bar-links">
            <div className="links-container1">
              <div className="support-links4">
                <img
                  className="container-icon2"
                  loading="lazy"
                  alt=""
                  src="/container.svg"
                />
              </div>
              <div className="am-to-12002">10.00 AM to 12.00 PM UTC+6</div>
              <div className="support-links5">
                <img
                  className="link-icon4"
                  loading="lazy"
                  alt=""
                  src="/link.svg"
                />
              </div>
              <a className="support2">Support</a>
              <div className="support-links6">
                <img className="link-icon5" alt="" src="/link-1.svg" />
              </div>
              <a className="how-to-order2">How To Order ?</a>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="container9">
            <nav className="user-links-wrapper">
              <nav className="nav-list2">
                <div className="item10">
                  <div className="link-menu8">
                    <a className="top-up2">Top Up</a>
                    <a
                      className="empty-dropdown"
                      href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-1853"
                      target="_blank"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="item11">
                  <div className="link-menu9">
                    <a className="gift-card2">Gift Card</a>
                    <a
                      className="a6"
                      href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-3540"
                      target="_blank"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="item12">
                  <div className="link-menu10">
                    <a className="subscription2">Subscription</a>
                    <a
                      className="a7"
                      href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-5441"
                      target="_blank"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="item13">
                  <div className="link-menu11">
                    <a className="game-keys2">Game Keys</a>
                    <a
                      className="a8"
                      href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-6708"
                      target="_blank"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="item14">
                  <div className="link6">
                    <a className="entertainment2">Entertainment</a>
                  </div>
                </div>
              </nav>
            </nav>
            <div className="cart-currency">
              <div className="cart-icon-wrapper">
                <div className="nav-list-item2">
                  <div className="link7">
                    <a className="login2">Login ➡</a>
                  </div>
                </div>
              </div>
              <div className="link8">
                <div className="div27">৳0.00</div>
                <i className="symbol2"></i>
                <div className="background6">
                  <div className="div28">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="checkout-title-wrapper">
        <div className="checkout-title">
          <div className="checkout-wrapper">
            <h1 className="checkout">{checkout}</h1>
          </div>
          <div className="view-or-edit">{viewOrEditYourCartBeforeC}</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,
  viewOrEditYourCartBeforeC: PropTypes.string,
};

export default FrameComponent1;
