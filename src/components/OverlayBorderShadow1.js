import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OverlayBorderShadow1.css";

const OverlayBorderShadow1 = ({
  className = "",
  netflixSprite200x113png,
  netflix,
  netflixGiftCards,
  prop,
  prop1,
  propTop,
  propLeft,
}) => {
  const overlayBorderShadow1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`overlaybordershadow1 ${className}`}
      style={overlayBorderShadow1Style}
    >
      <div className="background3">
        <img
          className="netflix-sprite-200x113png-icon"
          loading="lazy"
          alt=""
          src={netflixSprite200x113png}
        />
      </div>
      <div className="overlaybordershadow-inner">
        <div className="container-parent">
          <div className="container5">
            <div className="netflix">{netflix}</div>
            <div className="netflix-gift-cards">{netflixGiftCards}</div>
          </div>
          <div className="frame-container">
            <div className="wrapper">
              <div className="div5">£</div>
            </div>
            <div className="div6">{prop}</div>
            <div className="frame-div">
              <div className="frame">
                <div className="div7">00</div>
              </div>
              <div className="div8">-</div>
            </div>
            <div className="wrapper1">
              <div className="div9">£</div>
            </div>
            <div className="div10">{prop1}</div>
            <div className="wrapper2">
              <div className="div11">00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow1.propTypes = {
  className: PropTypes.string,
  netflixSprite200x113png: PropTypes.string,
  netflix: PropTypes.string,
  netflixGiftCards: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default OverlayBorderShadow1;
