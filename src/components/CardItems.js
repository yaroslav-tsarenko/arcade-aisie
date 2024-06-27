import PropTypes from "prop-types";
import "./CardItems.css";

const CardItems = ({ className = "" }) => {
  return (
    <div className={`card-items ${className}`}>
      <div className="link-m5xw6z3mmvygyylz-min-30-parent">
        <img
          className="link-m5xw6z3mmvygyylz-min-30"
          alt=""
          src="/link--m5xw6z3mmvygyylzmin300x300jpg@2x.png"
        />
        <div className="google-play-gift-card-parent">
          <div className="google-play-gift">Google Play Gift Card</div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="parent">
          <div className="div1">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="plus-minus-buttons-parent">
          <div className="plus-minus-buttons">
            <div className="plus-buttons">
              <img className="icon-plus" alt="" src="/iconplus.svg" />
            </div>
            <div className="empty-button-space">3</div>
            <input className="minus-buttons" type="checkbox" />
          </div>
          <div className="hourly-labels">
            <div className="hourly">Hourly</div>
            <div className="hourly-labels-inner">
              <img className="frame-item" alt="" src="/frame-1000002972.svg" />
            </div>
          </div>
        </div>
        <div className="empty-quantity-controls">$120.00</div>
      </div>
      <div className="card-items-child" />
    </div>
  );
};

CardItems.propTypes = {
  className: PropTypes.string,
};

export default CardItems;
