import { useCallback } from "react";
import { Button } from "@mui/material";
import Background from "./Background";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkButtonClick = useCallback(() => {
    navigate("/support");
  }, [navigate]);

  return (
    <section className={`section9 ${className}`}>
      <div className="effortless-global-connectivity-wrapper2">
        <h1 className="effortless-global-connectivity-container6">
          <span className="effortless-global-connectivity-container7">
            <span>{`Effortless Global Connectivity in `}</span>
            <b>
              <span className="easy-steps3">4 Easy Steps</span>
              <span className="span4">:</span>
            </b>
          </span>
        </h1>
      </div>
      <div className="background-parent6">
        <Background
          background="/background.svg"
          heading21ChooseYourPackag="1. Choose Your Package"
          basedOnWhereYoureGoingAnd="Based on where you’re going and your specific"
          needsGetTheIdealSolutionA="needs, get the ideal solution at transparent"
          rates="rates."
        />
        <Background
          background="/background-1.svg"
          heading21ChooseYourPackag="2. Scan The Code"
          basedOnWhereYoureGoingAnd="You’ll get a QR code after payment. Simply"
          needsGetTheIdealSolutionA="scan it with your smartphone or tablet to install"
          rates="your eSIM."
          propFlex="1"
          propBackground="linear-gradient(90deg, #9449b1, #7369b6)"
          propPadding="0px 0px 0px 2px"
        />
        <Background
          background="/background-2.svg"
          heading21ChooseYourPackag="3. Switch To eSIM"
          basedOnWhereYoureGoingAnd="When you land in your destination, make your"
          needsGetTheIdealSolutionA="eSIM the primary data connection on your"
          rates="smartphone or tablet."
          propFlex="0.9609"
          propBackground="linear-gradient(90deg, #7369b6, #5288bb)"
          propPadding="unset"
        />
        <Background
          background="/background-3.svg"
          heading21ChooseYourPackag="4. Connect To Network"
          basedOnWhereYoureGoingAnd="Enable roaming to join the local network and"
          needsGetTheIdealSolutionA="enjoy connected travel with 24/7/365 support"
          rates="available."
          propFlex="0.9721"
          propBackground="linear-gradient(90deg, #5288bb, #30a7bf)"
          propPadding="0px 61px 0px 63px"
        />
      </div>
      <div className="section-inner2">
        <div className="need-help-go-to-our-support-p-parent1">
          <p className="need-help-go-container3">
            <span className="need-help3">{`Need help? `}</span>
            <span>Go to our SUPPORT page for FAQs and troubleshooting.</span>
          </p>
          <div className="link-button-wrapper4">
            <Button
              className="link-button7"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#b529ac",
                border: "#b529ac solid 2px",
                borderRadius: "6px",
                "&:hover": { background: "#b529ac" },
                width: 178.2,
                height: 56,
              }}
              onClick={onLinkButtonClick}
            >
              Visit Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Section;
