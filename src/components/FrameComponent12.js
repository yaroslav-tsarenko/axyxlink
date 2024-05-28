import { Button } from "@mui/material";
import "./FrameComponent12.css";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <div className={`nav-parent2 ${className}`}>
      <header className="nav7">
        <div className="link-image4" />
        <div className="nav-inner7">
          <div className="sim-card-1-parent10">
            <img
              className="sim-card-1-icon12"
              loading="lazy"
              alt=""
              src="/simcard-1@2x.png"
            />
            <div className="axyx-link-wrapper7">
              <a className="axyx-link12">AXYX LINK</a>
            </div>
          </div>
        </div>
        <div className="frame-parent45">
          <div className="list-wrapper2">
            <div className="list4">
              <a className="item-link20">Choose Destination</a>
              <a className="item-link21">What is an eSIM?</a>
              <a className="item-link22">Get Support</a>
              <a className="item-link23">Contact</a>
              <a className="item-link24">{`My eSIMs & Top Up`}</a>
            </div>
          </div>
          <Button
            className="input5"
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
        <nav className="nav-inner8">
          <nav className="link-sign-up-parent6">
            <a className="link-sign9">Sign Up</a>
            <div className="div4">|</div>
            <a className="link-log9">Log In</a>
          </nav>
        </nav>
      </header>
      <div className="section14">
        <img
          className="image-icon31"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="were-here-to-container">
          <p className="were-here-to">We're Here To Ensure Your</p>
          <p className="seamless-connectivity">
            <b className="seamless">Seamless</b>
            <span> Connectivity.</span>
          </p>
        </h1>
        <p className="our-support-page-container">
          <span className="our-support-page">
            Our support page and documentation resolves 99% of queries within
            just
          </span>
          <span className="three-clicks-if">
            three clicks. If that doesn't solve your issue, we are available
            around the
          </span>
          <span className="clock-to-get">clock to get you connected.</span>
        </p>
      </div>
    </div>
  );
};


export default FrameComponent12;
