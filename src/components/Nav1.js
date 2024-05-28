import { Button } from "@mui/material";
import "./Nav1.css";

const Nav1 = ({ className = "" }) => {
  return (
    <header className={`nav6 ${className}`}>
      <div className="link-image1" />
      <div className="nav-inner1">
        <div className="sim-card-1-parent5">
          <img
            className="sim-card-1-icon8"
            loading="lazy"
            alt=""
            src="/simcard-1@2x.png"
          />
          <div className="axyx-link-wrapper1">
            <a className="axyx-link8">AXYX LINK</a>
          </div>
        </div>
      </div>
      <div className="frame-parent7">
        <div className="list-container">
          <div className="list1">
            <a className="item-link5">Choose Destination</a>
            <a className="item-link6">What is an eSIM?</a>
            <a className="item-link7">Get Support</a>
            <a className="item-link8">Contact</a>
            <a className="item-link9">{`My eSIMs & Top Up`}</a>
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
      <nav className="frame-nav">
        <nav className="link-sign-up-parent1">
          <a className="link-sign4">Sign Up</a>
          <div className="div3">|</div>
          <a className="link-log3">Log In</a>
        </nav>
      </nav>
    </header>
  );
};



export default Nav1;
