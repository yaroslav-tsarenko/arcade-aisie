import CardItems from "./CardItems";
import PropTypes from "prop-types";
import "./CartItemContainer.css";

const CartItemContainer = ({ className = "" }) => {
  return (
    <div className={`cart-item-container ${className}`}>
      <div className="cart-item">
        <div className="header">
          <div className="header-child" />
          <div className="product-header">
            <div className="product">Product</div>
          </div>
          <div className="price-quantity-header">
            <div className="price">Price</div>
            <div className="quantity">Quantity</div>
          </div>
          <div className="total">Total</div>
        </div>
        <div className="card-items1">
          <div className="card-details">
            <img
              className="link-m5xw6z3mmvygyylz-min-301"
              loading="lazy"
              alt=""
              src="/link--m5xw6z3mmvygyylzmin300x300jpg@2x.png"
            />
            <div className="card-titles">
              <div className="google-play-gift1">Google Play Gift Card</div>
              <div className="discount-20-off">Discount: 20% OFF</div>
            </div>
            <div className="card-quantities">
              <div className="quantity-controls">
                <div className="empty-quantity">$120.00</div>
                <div className="credits1">12 Credits</div>
              </div>
              <div className="credit-values">
                <div className="plus-button-container">
                  <div className="icon-plus-wrapper">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <div className="empty-button">3</div>
                  <input className="minus-button-container" type="checkbox" />
                </div>
                <div className="hourly-container">
                  <div className="hourly1">Hourly</div>
                  <div className="hourly-container-inner">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/frame-1000002972.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="empty-card-quantities">$120.00</div>
          </div>
          <div className="card-items-item" />
        </div>
        <CardItems />
        <CardItems />
        <div className="button-parent">
          <button className="button">
            <img className="tag-icon" alt="" src="/tag-icon.svg" />
            <div className="button1">Go Back</div>
            <img className="tag-icon1" alt="" src="/tag-icon.svg" />
          </button>
          <button className="button2">
            <img className="tag-icon2" alt="" src="/tag-icon.svg" />
            <div className="button3">Checkout</div>
            <img className="tag-icon3" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
      <div className="checkout-details">
        <div className="checkout-header-container">
          <div className="header1">
            <div className="checkout-details1">Checkout Details</div>
          </div>
        </div>
        <div className="subtotal-total">
          <div className="subtotal-total-labels">
            <div className="cart-subtotal">Cart Subtotal</div>
            <div className="empty-subtotal">$360.00</div>
          </div>
        </div>
        <div className="shipping-taxes-container">
          <div className="shipping-taxes">
            <div className="taxes-labels">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <div className="other-taxes">Other Taxes</div>
            </div>
            <div className="taxes-labels1">
              <div className="div2">$0.00</div>
              <div className="div3">$0.00</div>
            </div>
          </div>
        </div>
        <div className="checkout-details-inner">
          <div className="line-div" />
        </div>
        <div className="subtotal-total1">
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div4">$360.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItemContainer.propTypes = {
  className: PropTypes.string,
};

export default CartItemContainer;
