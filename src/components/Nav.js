import { Button } from "@mui/material";
import "./Nav.css";

const Nav = ({ className = "" }) => {
  return (
    <header className={`nav5 ${className}`}>
      <div className="link-image" />
      <div className="nav-inner">
        <div className="sim-card-1-parent3">
          <img
            className="sim-card-1-icon6"
            loading="lazy"
            alt=""
            src="/simcard-1@2x.png"
          />
          <div className="axyx-link-container">
            <a className="axyx-link6">AXYX LINK</a>
          </div>
        </div>
      </div>
      <div className="frame-parent3">
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
      <nav className="nav-child">
        <nav className="link-sign-up-group">
          <a className="link-sign2">Sign Up</a>
          <div className="div2">|</div>
          <a className="link-log1">Log In</a>
        </nav>
      </nav>
    </header>
  );
};


export default Nav;
