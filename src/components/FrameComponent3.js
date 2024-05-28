import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`nav-parent ${className}`}>
      <header className="nav3">
        <div className="link-image" />
        <div className="nav-inner">
          <div className="sim-card-1-parent5">
            <img
              className="sim-card-1-icon7"
              loading="lazy"
              alt=""
              src="/simcard-1@2x.png"
            />
            <div className="axyx-link-wrapper2">
              <a className="axyx-link7">AXYX LINK</a>
            </div>
          </div>
        </div>
        <div className="frame-parent12">
          <div className="list-wrapper">
            <div className="list">
              <a className="item-link">Choose Destination</a>
              <a className="item-link1">What is an eSIM?</a>
              <a className="item-link2">Get Support</a>
              <a className="item-link3">Contact</a>
              <a className="item-link4">{`My eSIMs & Top Up`}</a>
            </div>
          </div>
          <Button
            className="input"
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
        <nav className="nav-child">
          <nav className="frame-nav">
            <a className="link-sign4">Sign Up</a>
            <div className="div">|</div>
            <a className="link-log4">Log In</a>
          </nav>
        </nav>
      </header>
      <div className="section8">
        <img
          className="image-icon27"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="better-connections-with-container">
          <p className="better-connections-with-your">
            <span>{`Better Connections With `}</span>
            <b className="your">Your</b>
          </p>
          <p className="world">
            <b className="world1">World</b>
            <span className="span3">.</span>
          </p>
        </h1>
        <p className="axyxlink-esim-plans-container">
          <span className="axyxlink-esim-plans-container1">
            <span className="axyxlink-esim-plans">
              AxyxLink eSIM plans keep you and your devices seamlessly
            </span>
            <span className="connected-in-200">
              connected in 200+ international destinations.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};


export default FrameComponent3;
