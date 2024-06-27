import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ProductInfo.css";

const ProductInfo = ({ className = "" }) => {
  return (
    <section className={`product-info ${className}`}>
      <form className="product-container">
        <div className="product-details">
          <img
            className="image-10-icon"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <div className="gift-card-details">
            <div className="about-this-gift-voucher-parent">
              <div className="about-this-gift">About this Gift Voucher</div>
              <img className="frame-item" alt="" src="/vector-9.svg" />
            </div>
            <div className="how-to-use-parent">
              <div className="how-to-use">How to Use</div>
              <img className="frame-inner" alt="" src="/vector-9.svg" />
            </div>
            <div className="brands-included-in-this-vouche-parent">
              <div className="brands-included-in">
                Brands Included In this Voucher
              </div>
              <img className="vector-icon" alt="" src="/vector-9.svg" />
            </div>
            <div className="terms-conditions-parent">
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <img className="frame-child1" alt="" src="/vector-9.svg" />
            </div>
            <div className="product-description">
              <div className="note">Note:</div>
              <div className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</div>
            </div>
          </div>
        </div>
        <div className="purchase-options">
          <div className="options-container">
            <div className="recipient-options">
              <h1 className="best-buy-gift">Best Buy Gift Card</h1>
              <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
            </div>
            <div className="selection-title">
              <div className="i-would-like">I would Like to:</div>
              <div className="recipient-selection">
                <Button
                  className="selection-buttons"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#0024ff",
                    borderRadius: "5px",
                    "&:hover": { background: "#0024ff" },
                    height: 58,
                  }}
                >
                  Gift a Friend
                </Button>
                <Button
                  className="selection-buttons1"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#0024ff",
                    fontSize: "16",
                    borderColor: "#0024ff",
                    borderRadius: "5px",
                    "&:hover": { borderColor: "#0024ff" },
                    width: 143,
                    height: 58,
                  }}
                >
                  Gift Myself
                </Button>
              </div>
            </div>
            <div className="value-options">
              <div className="gift-card-worth">Gift Card Worth:</div>
              <div className="value-selection">
                <div className="value-buttons">
                  <div className="usd-200">USD $200</div>
                </div>
                <div className="value-buttons1">
                  <div className="usd-500">USD $500</div>
                </div>
                <div className="value-buttons2">
                  <div className="usd-700">USD $700</div>
                </div>
                <div className="value-buttons3">
                  <div className="usd-1000">USD $1000</div>
                </div>
              </div>
            </div>
            <div className="quantity-options">
              <div className="select-your-quantity">Select your Quantity</div>
              <div className="quantity-selection">
                <div className="quantity-buttons">
                  <div className="quantity-buttons-child" />
                  <img
                    className="add-icon"
                    loading="lazy"
                    alt=""
                    src="/add.svg"
                  />
                </div>
                <div className="empty-quantity">
                  <div className="div26">4</div>
                </div>
                <div className="quantity-buttons1">
                  <div className="quantity-buttons-item" />
                  <div className="add-icon-wrapper">
                    <img
                      className="add-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector-600.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="button"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0024ff",
                borderRadius: "5px",
                "&:hover": { background: "#0024ff" },
                height: 54,
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
};

export default ProductInfo;
