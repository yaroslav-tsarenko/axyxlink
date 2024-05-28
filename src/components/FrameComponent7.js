import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`nav-group ${className}`}>
      <header className="nav4">
        <div className="link-image1" />
        <div className="nav-inner1">
          <div className="sim-card-1-parent7">
            <img className="sim-card-1-icon9" alt="" src="/simcard-1@2x.png" />
            <div className="axyx-link-wrapper4">
              <a className="axyx-link9">AXYX LINK</a>
            </div>
          </div>
        </div>
        <div className="frame-parent16">
          <div className="list-container">
            <div className="list1">
              <a className="item-link5">Choose Destination</a>
              <a className="item-link6">What is an eSIM?</a>
              <a className="item-link7">Get Support</a>
              <a className="item-link8">Contact</a>
              <a className="item-link9">{`My eSIMs & Top Up`}</a>
            </div>
          </div>
          <TextField
            className="input1"
            placeholder="Destination Search"
            variant="outlined"
            InputProps={{
              startAdornment: <img width="20px" height="20px" src="/svg.svg" />,
            }}
            sx={{
              "& fieldset": { borderColor: "#b529ac" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#4c4c4c",
                paddingLeft: "8px",
                borderRadius: "9999px",
              },
              "& .MuiInputBase-input": { paddingLeft: "6px", color: "#bbb" },
              width: "256px",
            }}
          />
        </div>
        <nav className="nav-inner2">
          <nav className="link-sign-up-parent3">
            <a className="link-sign6">Sign Up</a>
            <div className="div1">|</div>
            <a className="link-log6">Log In</a>
          </nav>
        </nav>
      </header>
      <div className="section10">
        <img
          className="image-icon28"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="goodbye-roaming-charges-container">
          <p className="goodbye-roaming-charges">
            <b className="goodbye-roaming-charges1">Goodbye Roaming Charges.</b>
          </p>
          <p className="hello-world">Hello World.</p>
        </h1>
        <p className="the-second-you-container">
          <span className="the-second-you1">
            The second you land, you're covered and connected. Enjoy the
            reliability
          </span>
          <span className="and-ease-of">
            and ease of fixed-rate data throughout your journey.
          </span>
        </p>
      </div>
    </section>
  );
};


export default FrameComponent7;
