import PropTypes from "prop-types";
import "./NavBar.css";

const NavBar = ({ className = "" }) => {
  return (
    <header className={`nav-bar1 ${className}`}>
      <div className="container2">
        <div className="logo-22">
          <img
            className="logo-icon2"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className="arcade-aisle-container">
            <div className="arcade-aisle2">Arcade Aisle</div>
          </div>
        </div>
        <div className="top-links">
          <div className="links-container">
            <div className="support-links1">
              <img
                className="container-icon1"
                loading="lazy"
                alt=""
                src="/container.svg"
              />
            </div>
            <div className="am-to-12001">10.00 AM to 12.00 PM UTC+6</div>
            <div className="support-links2">
              <img
                className="link-icon2"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
            </div>
            <a className="support1">Support</a>
            <div className="support-links3">
              <img className="link-icon3" alt="" src="/link-1.svg" />
            </div>
            <a className="how-to-order1">How To Order ?</a>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="container3">
          <nav className="navigation">
            <nav className="nav-list1">
              <div className="item5">
                <div className="link-menu4">
                  <a className="top-up1">Top Up</a>
                  <a
                    className="placeholder"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-1853"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item6">
                <div className="link-menu5">
                  <a className="gift-card1">Gift Card</a>
                  <a
                    className="a3"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-3540"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item7">
                <div className="link-menu6">
                  <a className="subscription1">Subscription</a>
                  <a
                    className="a4"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-5441"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item8">
                <div className="link-menu7">
                  <a className="game-keys1">Game Keys</a>
                  <a
                    className="a5"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-6708"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item9">
                <div className="link3">
                  <a className="entertainment1">Entertainment</a>
                </div>
              </div>
            </nav>
          </nav>
          <div className="currency">
            <div className="currency-wrapper">
              <div className="nav-list-item1">
                <div className="link4">
                  <a className="login1">Login ➡</a>
                </div>
              </div>
            </div>
            <div className="link5">
              <div className="div1">৳0.00</div>
              <i className="symbol1"></i>
              <div className="background1">
                <div className="div2">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};

export default NavBar;
