import { Button } from "@mui/material";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`nav-container ${className}`}>
      <header className="nav5">
        <div className="link-image2" />
        <div className="nav-inner3">
          <div className="sim-card-1-parent8">
            <img
              className="sim-card-1-icon10"
              loading="lazy"
              alt=""
              src="/simcard-1@2x.png"
            />
            <div className="axyx-link-wrapper5">
              <a className="axyx-link10">AXYX LINK</a>
            </div>
          </div>
        </div>
        <div className="frame-parent19">
          <div className="list-frame">
            <div className="list2">
              <a className="item-link10">Choose Destination</a>
              <a className="item-link11">What is an eSIM?</a>
              <a className="item-link12">Get Support</a>
              <a className="item-link13">Contact</a>
              <a className="item-link14">{`My eSIMs & Top Up`}</a>
            </div>
          </div>
          <Button
            className="input2"
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
        <nav className="nav-inner4">
          <nav className="link-sign-up-parent4">
            <a className="link-sign7">Sign Up</a>
            <div className="div2">|</div>
            <a className="link-log7">Log In</a>
          </nav>
        </nav>
      </header>
      <div className="section11">
        <img
          className="image-icon29"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="what-is-an-container">
          <span>{`What is an `}</span>
          <b className="esim">eSIM?</b>
        </h1>
        <p className="not-all-esims-container">
          <span className="not-all-esims-container1">
            <span className="not-all-esims-are-created-equa">
              <span>
                Not all eSIMS are created equal. AxyxLink is the trailblazer in
                solving
              </span>
            </span>
            <span className="travelers-connectivity-challe">
              <span>{`travelers' connectivity challenges, with over `}</span>
              <b className="years-in-the">15 years in the industry</b>
              <span className="span5">.</span>
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};


export default FrameComponent9;
