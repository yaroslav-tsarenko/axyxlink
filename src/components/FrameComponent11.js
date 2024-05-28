import { Button } from "@mui/material";
import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section className={`nav-parent1 ${className}`}>
      <header className="nav6">
        <div className="link-image3" />
        <div className="nav-inner5">
          <div className="sim-card-1-parent9">
            <img
              className="sim-card-1-icon11"
              loading="lazy"
              alt=""
              src="/simcard-1@2x.png"
            />
            <div className="axyx-link-wrapper6">
              <a className="axyx-link11">AXYX LINK</a>
            </div>
          </div>
        </div>
        <div className="frame-parent40">
          <div className="list-wrapper1">
            <div className="list3">
              <a className="item-link15">Choose Destination</a>
              <a className="item-link16">What is an eSIM?</a>
              <a className="item-link17">Get Support</a>
              <a className="item-link18">Contact</a>
              <a className="item-link19">{`My eSIMs & Top Up`}</a>
            </div>
          </div>
          <Button
            className="input3"
            startIcon={<img width="20px" height="20px" src="/svg.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#bbb",
              fontSize: "16",
              background: "#4c4c4c",
              border: "#b529ac solid 2px",
              borderRadius: "9999px",
              "&:hover": { background: "#4c4c4c" },
              width: 256,
            }}
          >
            Destination Search
          </Button>
        </div>
        <nav className="nav-inner6">
          <nav className="link-sign-up-parent5">
            <a className="link-sign8">Sign Up</a>
            <div className="div3">|</div>
            <a className="link-log8">Log In</a>
          </nav>
        </nav>
      </header>
      <div className="section13">
        <img
          className="image-icon30"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="got-questions-need-container">
          <p className="got-questions-need-help">
            <span>{`Got Questions? `}</span>
            <b className="need-help4">Need Help?</b>
          </p>
          <p className="its-no-problem">It's No Problem When You Use</p>
          <p className="axyxlink1">AxyxLink.</p>
        </h1>
        <p className="this-is-where-container">
          <span className="this-is-where">
            This is where you’ll find Frequently Asked Questions (FAQs), answers
            and
          </span>
          <span className="troubleshooting-guides">
            troubleshooting guides.
          </span>
        </p>
      </div>
    </section>
  );
};



export default FrameComponent11;
