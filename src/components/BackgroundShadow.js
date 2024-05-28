import { useMemo } from "react";
import "./BackgroundShadow.css";

const BackgroundShadow = ({
  className = "",
  easysvg,
  heading23AHASSLEFREEEXPER,
  withoutHuntingForLocalSIM,
  transparentAndFlexibleAnd,
  messageAway,
  propFlex,
  propPadding,
  propHeight,
  propFlex1,
}) => {
  const backgroundShadowStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const easysvgIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const heading2Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div
      className={`backgroundshadow4 ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="backgroundshadow-child">
        <div className="hero-shape-3svg-parent" style={frameDiv1Style}>
          <img
            className="hero-shape-3svg-icon"
            alt=""
            src="/hero-shapesvg.svg"
          />
          <img
            className="easysvg-icon"
            loading="lazy"
            alt=""
            src={easysvg}
            style={easysvgIconStyle}
          />
        </div>
      </div>
      <div className="frame-parent20">
        <div className="heading-2-3-a-hassle-free-e-wrapper">
          <b className="heading-2209" style={heading2Style}>
            {heading23AHASSLEFREEEXPER}
          </b>
        </div>
        <p className="without-hunting-for-container">
          <span className="without-hunting-for">
            {withoutHuntingForLocalSIM}
          </span>
          <span className="transparent-and-flexible">
            {transparentAndFlexibleAnd}
          </span>
          <span className="message-away">{messageAway}</span>
        </p>
      </div>
    </div>
  );
};


export default BackgroundShadow;
