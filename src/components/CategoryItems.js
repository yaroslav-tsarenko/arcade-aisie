import PropTypes from "prop-types";
import "./CategoryItems.css";

const CategoryItems = ({ className = "", topUpCredit, products }) => {
  return (
    <div className={`category-items ${className}`}>
      <h3 className="top-up-credit">{topUpCredit}</h3>
      <div className="products">{products}</div>
      <img
        className="arrow-circle-right-icon"
        loading="lazy"
        alt=""
        src="/arrowcircleright.svg"
      />
    </div>
  );
};

CategoryItems.propTypes = {
  className: PropTypes.string,
  topUpCredit: PropTypes.string,
  products: PropTypes.string,
};

export default CategoryItems;
