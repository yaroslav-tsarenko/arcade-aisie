import CategoryItems from "./CategoryItems";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`x-wrapper ${className}`}>
      <div className="x">
        <h3 className="shop-by-category">SHOP BY CATEGORY</h3>
        <div className="purchase-a-gift">
          Purchase a Gift Card, In-Game Item, Top-Ups, Redeem Codes,
          Subscriptions, Software, NFT Tokens, Game CD-Keys, and more.
        </div>
        <div className="product-categories">
          <CategoryItems topUpCredit="Top Up Credit" products="41 Products" />
          <CategoryItems topUpCredit="Subscription" products="12 Products" />
          <CategoryItems topUpCredit="Software" products="1 Products" />
          <CategoryItems topUpCredit="Top Up Card" products="21 Products" />
          <CategoryItems topUpCredit="Credits" products="12 Products" />
          <CategoryItems topUpCredit="Rewards" products="1 Products" />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
