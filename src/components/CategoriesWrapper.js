import OverlayBorderShadow from "./OverlayBorderShadow";
import OverlayBorderShadow1 from "./OverlayBorderShadow1";
import PropTypes from "prop-types";
import "./CategoriesWrapper.css";

const CategoriesWrapper = ({ className = "" }) => {
  return (
    <div className={`categories-wrapper ${className}`}>
      <div className="categories-header">
        <div className="heading-3">All categories</div>
        <div className="empty-space">(37)</div>
      </div>
      <div className="category-grid">
        <OverlayBorderShadow
          playstationStoreSprite200="/playstationstoresprite200x113png@2x.png"
          playStationStore="PlayStation Store"
          playStationStoreGiftCards="PlayStation Store Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="300."
          emptyValues="00"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/applegiftcardssprite200x113png@2x.png"
          playStationStore="Apple"
          playStationStoreGiftCards="Apple Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="500."
          emptyValues="00"
          propLeft="248px"
          propTop="0px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/googleplay-new-sprite200x113png@2x.png"
          playStationStore="Google Play"
          playStationStoreGiftCards="Google Play Cards"
          emptyPricing="5."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="489.6px"
          propTop="0px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/steam-sprite200x113png@2x.png"
          playStationStore="Steam"
          playStationStoreGiftCards="Steam Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="731.2px"
          propTop="0px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/xboxsprite200x113png@2x.png"
          playStationStore="Xbox"
          playStationStoreGiftCards="Xbox Gift Cards"
          emptyPricing="5."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="972.8px"
          propTop="0px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/robloxsprite200x113png@2x.png"
          playStationStore="Roblox"
          playStationStoreGiftCards="Roblox Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="200."
          emptyValues="00"
          propLeft="1214.4px"
          propTop="0px"
        />
        <OverlayBorderShadow1
          netflixSprite200x113png="/netflixsprite200x113png@2x.png"
          netflix="Netflix"
          netflixGiftCards="Netflix Gift Cards"
          prop="25."
          prop1="200."
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/justeatsprite200x113png@2x.png"
          playStationStore="Just Eat"
          playStationStoreGiftCards="Just Eat Gift Cards"
          emptyPricing="15."
          discountValues="00"
          emptySalePricing="50."
          emptyValues="00"
          propLeft="6.4px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/nintendosprite200x113png@2x.png"
          playStationStore="Nintendo eShop"
          playStationStoreGiftCards="Nintendo eShop Cards"
          emptyPricing="15."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="248px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/spotifysprite200x113png@2x.png"
          playStationStore="Spotify"
          playStationStoreGiftCards="Spofity Premium Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="60."
          emptyValues="00"
          propLeft="489.6px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/riotsprite200x1132pxoutlinepng@2x.png"
          playStationStore="Riot Games"
          playStationStoreGiftCards="Riot Games Gift Cards"
          emptyPricing="9."
          discountValues="00"
          emptySalePricing="18."
          emptyValues="00"
          propLeft="731.2px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/ubersprite200x113png@2x.png"
          playStationStore="Uber (Eats)"
          playStationStoreGiftCards="Uber Gift Cards"
          emptyPricing="15."
          discountValues="00"
          emptySalePricing="150."
          emptyValues="00"
          propLeft="972.8px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/razorgold-sprite200x113png@2x.png"
          playStationStore="Razer Gold"
          playStationStoreGiftCards="Razer Gold Gift Cards"
          emptyPricing="5."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="1214.4px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/crunchyrollsprite200x113png@2x.png"
          playStationStore="Crunchyroll"
          playStationStoreGiftCards="Crunchyroll Premium Cards"
          emptyPricing="4."
          discountValues="99"
          emptySalePricing="49."
          emptyValues="99"
          propLeft="1456px"
          propTop="310.1px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/blizzardsprite200x113png@2x.png"
          playStationStore="Blizzard"
          playStationStoreGiftCards="Blizzard Gift Cards"
          emptyPricing="20."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="6.4px"
          propTop="631.5px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/tindersprite200x113png@2x.png"
          playStationStore="Tinder Plus and Gold"
          playStationStoreGiftCards="Tinder Gift Cards"
          emptyPricing="7."
          discountValues="99"
          emptySalePricing="19."
          emptyValues="99"
          propLeft="248px"
          propTop="620.3px"
        />
        <div className="overlaybordershadow2">
          <div className="background4">
            <img
              className="xbox-gamepass-ultimate-grey-sp-icon"
              loading="lazy"
              alt=""
              src="/xbox-gamepass-ultimategreysprite200x113png@2x.png"
            />
          </div>
          <div className="overlaybordershadow-child">
            <div className="container-group">
              <div className="container6">
                <div className="xbox-game-pass-container">
                  <p className="xbox-game-pass">Xbox Game Pass</p>
                  <p className="ultimate">Ultimate</p>
                </div>
                <div className="game-pass-ultimate">
                  Game Pass Ultimate Subscr…
                </div>
              </div>
              <div className="frame-parent1">
                <div className="wrapper3">
                  <div className="div12">£</div>
                </div>
                <div className="div13">12.</div>
                <div className="frame-parent2">
                  <div className="wrapper4">
                    <div className="div14">99</div>
                  </div>
                  <div className="div15">-</div>
                </div>
                <div className="wrapper5">
                  <div className="div16">£</div>
                </div>
                <div className="div17">38.</div>
                <div className="wrapper6">
                  <div className="div18">99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OverlayBorderShadow
          playstationStoreSprite200="/amazon-sprite200x113png@2x.png"
          playStationStore="Amazon.co.uk"
          playStationStoreGiftCards="Amazon Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="731.2px"
          propTop="620.3px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/zalandosprite200x1132pxoutlinepng@2x.png"
          playStationStore="Zalando"
          playStationStoreGiftCards="Zalando Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="150."
          emptyValues="00"
          propLeft="972.8px"
          propTop="620.3px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/deliveroosprite200x113png@2x.png"
          playStationStore="Deliveroo"
          playStationStoreGiftCards="Deliveroo Gift Cards"
          emptyPricing="15."
          discountValues="00"
          emptySalePricing="150."
          emptyValues="00"
          propLeft="1214.4px"
          propTop="620.3px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/steam-sprite200x113png-1@2x.png"
          playStationStore="Steam Gift Card USD"
          playStationStoreGiftCards="Steam"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="100."
          emptyValues="00"
          propLeft="1456px"
          propTop="631.5px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/easprite200x1132pxoutlinepng@2x.png"
          playStationStore="EA"
          playStationStoreGiftCards="EA Gift Cards"
          emptyPricing="15."
          discountValues="00"
          emptySalePricing="25."
          emptyValues="00"
          propLeft="6.4px"
          propTop="952.8px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/rakutenkobosprite200x113png@2x.png"
          playStationStore="Kobo"
          playStationStoreGiftCards="Kobo Gift Cards"
          emptyPricing="10."
          discountValues="00"
          emptySalePricing="25."
          emptyValues="00"
          propLeft="248px"
          propTop="952.8px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/nintendo-onlinesprite200x113png@2x.png"
          playStationStore="Nintendo Switch Online"
          playStationStoreGiftCards="Nintendo Switch Online Cards"
          emptyPricing="7."
          discountValues="99"
          emptySalePricing="59."
          emptyValues="99"
          propLeft="489.6px"
          propTop="952.8px"
        />
        <div className="overlaybordershadow3">
          <div className="background5">
            <img
              className="lifestyle-sprite-200x113png-icon"
              loading="lazy"
              alt=""
              src="/lifestyle-sprite200x113png@2x.png"
            />
          </div>
          <div className="overlaybordershadow-inner1">
            <div className="container-container">
              <div className="container7">
                <div className="lifestyle-motivates">Lifestyle-Motivates</div>
                <a className="lifestyle">Lifestyle</a>
              </div>
              <div className="frame-parent3">
                <div className="wrapper7">
                  <div className="div19">£</div>
                </div>
                <div className="div20">20.</div>
                <div className="frame-parent4">
                  <div className="wrapper8">
                    <div className="div21">00</div>
                  </div>
                  <div className="div22">-</div>
                </div>
                <div className="wrapper9">
                  <div className="div23">£</div>
                </div>
                <div className="div24">100.</div>
                <div className="wrapper10">
                  <div className="div25">00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OverlayBorderShadow
          playstationStoreSprite200="/airbnbsprite200x113png@2x.png"
          playStationStore="Airbnb"
          playStationStoreGiftCards="Airbnb Gift Cards"
          emptyPricing="25."
          discountValues="00"
          emptySalePricing="500."
          emptyValues="00"
          propLeft="972.8px"
          propTop="952.8px"
        />
        <OverlayBorderShadow1
          netflixSprite200x113png="/twitchsprite200x113png@2x.png"
          netflix="Twitch"
          netflixGiftCards="Twitch Gift Cards"
          prop="15."
          prop1="150."
          propTop="952.8px"
          propLeft="1214.4px"
        />
        <OverlayBorderShadow
          playstationStoreSprite200="/xbox-gamepasssprite200x113png@2x.png"
          playStationStore="Xbox Game Pass"
          playStationStoreGiftCards="Xbox Game Pass Cards"
          emptyPricing="23."
          discountValues="99"
          emptySalePricing="47."
          emptyValues="99"
          propLeft="1456px"
          propTop="952.8px"
        />
      </div>
    </div>
  );
};

CategoriesWrapper.propTypes = {
  className: PropTypes.string,
};

export default CategoriesWrapper;
