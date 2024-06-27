import PropTypes from "prop-types";
import "./NavBar1.css";

const NavBar1 = ({ className = "" }) => {
  return (
    <header className={`nav-bar ${className}`}>
      <div className="container">
        <div className="logo-2">
          <img className="logo-icon" alt="" src="/logo@2x.png" />
          <div className="arcade-aisle-wrapper">
            <div className="arcade-aisle">Arcade Aisle</div>
          </div>
        </div>
        <div className="support-links-wrapper">
          <div className="support-links">
            <div className="link-items">
              <img className="container-icon" alt="" src="/container.svg" />
            </div>
            <div className="am-to-1200">10.00 AM to 12.00 PM UTC+6</div>
            <div className="link-items1">
              <img className="link-icon" alt="" src="/link.svg" />
            </div>
            <a className="support">Support</a>
            <div className="link-items2">
              <img className="link-icon1" alt="" src="/link-1.svg" />
            </div>
            <a className="how-to-order">How To Order ?</a>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container1">
          <nav className="nav-list-wrapper">
            <nav className="nav-list">
              <div className="item">
                <div className="link-menu">
                  <a className="top-up">Top Up</a>
                  <a
                    className="empty-placeholders"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-1853"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item1">
                <div className="link-menu1">
                  <a className="gift-card">Gift Card</a>
                  <a
                    className="a"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-3540"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item2">
                <div className="link-menu2">
                  <a className="subscription">Subscription</a>
                  <a
                    className="a1"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-5441"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item3">
                <div className="link-menu3">
                  <a className="game-keys">Game Keys</a>
                  <a
                    className="a2"
                    href="https://www.figma.com/design/wM2VHO1ajYCGEoNaOIY7D4?node-id=1-6708"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
              <div className="item4">
                <div className="link">
                  <a className="entertainment">Entertainment</a>
                </div>
              </div>
            </nav>
          </nav>
          <div className="frame-parent">
            <div className="nav-list-item-wrapper">
              <div className="nav-list-item">
                <div className="link1">
                  <a className="login">Login ➡</a>
                </div>
              </div>
            </div>
            <div className="link2">
              <div className="div">৳0.00</div>
              <div className="symbol-parent">
                <i className="symbol" />
                <div className="background">
                  <div className="empty-background">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

NavBar1.propTypes = {
  className: PropTypes.string,
};

export default NavBar1;
