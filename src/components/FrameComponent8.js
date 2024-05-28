import BackgroundShadow from "./BackgroundShadow";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`frame-parent21 ${className}`}>
      <div className="frame-wrapper171">
        <div className="frame-parent22">
          <div className="why-use-axyxlink-wrapper">
            <h1 className="why-use-axyxlink-container">
              <span className="why-use-axyxlink-container1">
                <span>{`Why Use `}</span>
                <b className="axyxlink">AxyxLink?</b>
              </span>
            </h1>
          </div>
          <p className="if-youre-a-container">
            <span className="if-youre-a">
              If you're a traveler who values your time, money, and experiences,
              you need a smarter solution than
            </span>
            <span className="old-school-roaming">
              'old school' roaming. Say Yes to AxyxLink and No to slow data
              speeds and lofty fees.
            </span>
          </p>
        </div>
      </div>
      <div className="backgroundshadow-parent">
        <div className="backgroundshadow5">
          <div className="backgroundshadow-inner1">
            <div className="hero-shapesvg-parent">
              <img
                className="hero-shapesvg-icon"
                alt=""
                src="/hero-shapesvg.svg"
              />
              <img
                className="fixedsvg-icon"
                loading="lazy"
                alt=""
                src="/fixedsvg.svg"
              />
            </div>
          </div>
          <div className="heading-2-1-pocket-friendly-parent">
            <b className="heading-2210">1. POCKET-FRIENDLY CONNECTIVITY</b>
            <div className="without-exorbitant-roaming-cha-wrapper">
              <div className="without-exorbitant-roaming">
                without exorbitant roaming charges.
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundshadow6">
          <div className="backgroundshadow-inner2">
            <div className="hero-shape-2svg-parent">
              <img
                className="hero-shape-2svg-icon"
                alt=""
                src="/hero-shapesvg.svg"
              />
              <img
                className="digitalsvg-icon"
                loading="lazy"
                alt=""
                src="/digitalsvg.svg"
              />
            </div>
          </div>
          <div className="instant-connection-a-range-of-parent">
            <b className="instant-connection-a-container">
              <p className="instant-connection-a">
                2. INSTANT CONNECTION. A RANGE OF
              </p>
              <p className="options">OPTIONS.</p>
            </b>
            <div className="use-your-favorite-apps-and-ser-wrapper">
              <p className="use-your-favorite-container">
                <span className="use-your-favorite">
                  Use your favorite apps and services on your smartphone
                </span>
                <span className="or-tablet-without">
                  or tablet, without worrying about running out of data.
                </span>
              </p>
            </div>
          </div>
        </div>
        <BackgroundShadow
          easysvg="/easysvg.svg"
          heading23AHASSLEFREEEXPER="3. A HASSLE-FREE EXPERIENCE"
          withoutHuntingForLocalSIM="without hunting for local SIM cards. We make it effortless,"
          transparentAndFlexibleAnd="transparent and flexible, and 24/7/365 help is a call or"
          messageAway="message away."
        />
        <BackgroundShadow
          easysvg="/coveragesvg.svg"
          heading23AHASSLEFREEEXPER={`4. SUPERB SPEED & RELIABILITY`}
          withoutHuntingForLocalSIM="thanks to our world-class global network. Get"
          transparentAndFlexibleAnd="unparalleled connectivity and top coverage from 800+"
          messageAway="mobile networks."
          propFlex="0.9375"
          propPadding="38px 26px 38.1px"
          propHeight="39px"
          propFlex1="1"
        />
      </div>
    </section>
  );
};

export default FrameComponent8;
