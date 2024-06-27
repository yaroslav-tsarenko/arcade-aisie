import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OverlayBorderShadow.css";

const OverlayBorderShadow = ({
  className = "",
  playstationStoreSprite200,
  playStationStore,
  playStationStoreGiftCards,
  emptyPricing,
  discountValues,
  emptySalePricing,
  emptyValues,
  propLeft,
  propTop,
}) => {
  const overlayBorderShadowStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={`overlaybordershadow ${className}`}
      style={overlayBorderShadowStyle}
    >
      <div className="background2">
        <img
          className="playstation-store-sprite-200x1-icon"
          loading="lazy"
          alt=""
          src={playstationStoreSprite200}
        />
      </div>
      <div className="grid-item-content-wrapper">
        <div className="grid-item-content">
          <div className="container4">
            <div className="playstation-store">{playStationStore}</div>
            <div className="playstation-store-gift">
              {playStationStoreGiftCards}
            </div>
          </div>
          <div className="grid-item-pricing">
            <div className="price-symbols">
              <div className="div3">£</div>
            </div>
            <div className="empty-pricing">{emptyPricing}</div>
            <div className="grid-item-discount">
              <div className="discount-symbols">
                <div className="discount-values">{discountValues}</div>
              </div>
              <div className="empty-discount">-</div>
            </div>
            <div className="grid-item-sale-price">
              <div className="div4">£</div>
            </div>
            <div className="empty-sale-pricing">{emptySalePricing}</div>
            <div className="empty-grid-item">
              <div className="empty-values">{emptyValues}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow.propTypes = {
  className: PropTypes.string,
  playstationStoreSprite200: PropTypes.string,
  playStationStore: PropTypes.string,
  playStationStoreGiftCards: PropTypes.string,
  emptyPricing: PropTypes.string,
  discountValues: PropTypes.string,
  emptySalePricing: PropTypes.string,
  emptyValues: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default OverlayBorderShadow;
