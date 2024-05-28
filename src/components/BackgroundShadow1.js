import { useMemo } from "react";
import { Button } from "@mui/material";
import "./BackgroundShadow1.css";

const BackgroundShadow1 = ({
  className = "",
  ausvg,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const backgroundShadowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={`backgroundshadow7 ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="ausvg-parent">
        <img className="ausvg-icon" loading="lazy" alt="" src={ausvg} />
        <div className="australia-wrapper">
          <b className="australia">Australia</b>
        </div>
      </div>
      <div className="frame-parent23">
        <div className="price-container">
          <div className="price2">Price</div>
          <b className="us450">US$4.50</b>
        </div>
        <div className="separator6" />
        <div className="data-container">
          <div className="data2">Data</div>
          <b className="gb2">1 GB</b>
        </div>
        <div className="separator7" />
        <div className="validity-container">
          <div className="validity2">Validity</div>
          <b className="days2">7 Days</b>
        </div>
        <Button
          className="link-button6"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#30a7bf",
            border: "#30a7bf solid 2px",
            borderRadius: "6px",
            "&:hover": { background: "#30a7bf" },
            height: 56,
          }}
        >
          Select Package
        </Button>
      </div>
    </div>
  );
};


export default BackgroundShadow1;
