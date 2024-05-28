import { useMemo } from "react";
import "./Background.css";

const Background = ({
  className = "",
  background,
  heading21ChooseYourPackag,
  basedOnWhereYoureGoingAnd,
  needsGetTheIdealSolutionA,
  rates,
  propFlex,
  propBackground,
  propPadding,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      flex: propFlex,
      background: propBackground,
    };
  }, [propFlex, propBackground]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`background12 ${className}`} style={backgroundStyle}>
      <div className="background-wrapper10">
        <img
          className="background-icon24"
          loading="lazy"
          alt=""
          src={background}
        />
      </div>
      <div
        className="heading-2-1-choose-your-pac-wrapper1"
        style={frameDivStyle}
      >
        <b className="heading-2183">{heading21ChooseYourPackag}</b>
      </div>
      <p className="based-on-where-container3">
        <span className="based-on-where3">{basedOnWhereYoureGoingAnd}</span>
        <span className="needs-get-the3">{needsGetTheIdealSolutionA}</span>
        <span className="rates3">{rates}</span>
      </p>
    </div>
  );
};


export default Background;
