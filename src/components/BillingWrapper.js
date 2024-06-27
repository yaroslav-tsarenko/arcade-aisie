import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./BillingWrapper.css";

const BillingWrapper = ({ className = "" }) => {
  return (
    <section className={`billing-wrapper ${className}`}>
      <div className="billing-content">
        <form className="billing-header">
          <div className="billing-details">
            <h2 className="checkout1">Checkout</h2>
            <div className="header">
              <div className="billing-details1">Billing Details</div>
            </div>
            <div className="form-field-block">
              <div className="row-1">
                <div className="block-1">
                  <div className="first-name">First Name</div>
                </div>
                <div className="block-2">
                  <div className="last-name">Last Name</div>
                </div>
              </div>
              <div className="row-2">
                <div className="block-11">
                  <div className="company-name">Company Name</div>
                </div>
                <div className="block-21">
                  <div className="country">Country</div>
                  <img className="icon" alt="" src="/icon.svg" />
                </div>
              </div>
              <div className="row-3">
                <div className="block-12">
                  <div className="street-address">Street Address</div>
                </div>
              </div>
              <TextField
                className="block-22"
                placeholder="Apartment / Suite / Unit / etc. (Optional)"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="row-4"
                placeholder="Town / City"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="block-23"
                placeholder="Email Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="row-5">
                <TextField
                  className="block-13"
                  placeholder="ZIP"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-24"
                  placeholder="Phone"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
            </div>
            <div className="billing-divider" />
            <div className="billing-header-content">
              <div className="button1">
                <img className="tag-icon" alt="" src="/tag-icon.svg" />
                <b className="button2">Back</b>
                <img className="tag-icon1" alt="" src="/tag-icon.svg" />
              </div>
              <Button
                className="button3"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#0024ff",
                  borderRadius: "10px",
                  "&:hover": { background: "#0024ff" },
                  width: 136,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
          <div className="checkout-details-parent">
            <div className="checkout-details">
              <div className="header1">
                <div className="checkout-details1">Checkout Details</div>
              </div>
              <div className="order-details-items">
                <div className="cart-subtotal">Cart Subtotal</div>
                <div className="empty-order-details">$360.00</div>
              </div>
              <div className="order-details-items1">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="div29">$0.00</div>
              </div>
              <div className="order-details-items2">
                <div className="other-taxes">Other Taxes</div>
                <div className="div30">$0.00</div>
              </div>
              <div className="order-details-divider" />
              <div className="order-details-items3">
                <div className="grand-total">Grand Total</div>
                <div className="div31">$360.00</div>
              </div>
            </div>
            <div className="transfer-options">
              <div className="header2">
                <div className="transfer-options1">Transfer Options</div>
              </div>
              <div className="checkout-details2">
                <div className="logos-block">
                  <div className="block-14">
                    <div className="logo-block">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                    <div className="bank-transfer">
                      <p className="bank">Bank</p>
                      <p className="transfer">Transfer</p>
                    </div>
                  </div>
                  <div className="block-25">
                    <div className="logo-block1">
                      <img
                        className="image-2-icon"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <div className="google-pay">
                      <p className="google">Google</p>
                      <p className="pay">Pay</p>
                    </div>
                  </div>
                </div>
                <div className="payment-options-content">
                  <div className="block-3">
                    <div className="logo-block2">
                      <img
                        className="image-3-icon"
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <div className="apple-pay">
                      <p className="apple">Apple</p>
                      <p className="pay1">Pay</p>
                    </div>
                  </div>
                  <div className="block-4">
                    <div className="logo-block3">
                      <img
                        className="image-4-icon"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="paypal">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="checkout2">
          <div className="header3">
            <div className="checkout3">Checkout</div>
          </div>
          <div className="checkout-details3">
            <div className="your-personal-data">
              Your Personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our product
            </div>
            <Button
              className="button4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0024ff",
                borderRadius: "10px",
                "&:hover": { background: "#0024ff" },
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

BillingWrapper.propTypes = {
  className: PropTypes.string,
};

export default BillingWrapper;
