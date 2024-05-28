import { Button } from "@mui/material";
import "./Nav3.css";

const Nav3 = ({ className = "" }) => {
  return (
    <header className={`nav8 ${className}`}>
      <div className="link-image3" />
      <div className="nav-inner4">
        <div className="sim-card-1-parent9">
          <img
            className="sim-card-1-icon12"
            loading="lazy"
            alt=""
            src="/simcard-1@2x.png"
          />
          <div className="axyx-link-wrapper5">
            <a className="axyx-link12">AXYX LINK</a>
          </div>
        </div>
      </div>
      <div className="frame-parent16">
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
      <nav className="nav-inner5">
        <nav className="link-sign-up-parent4">
          <a className="link-sign8">Sign Up</a>
          <div className="div4">|</div>
          <a className="link-log7">Log In</a>
        </nav>
      </nav>
    </header>
  );
};


export default Nav3;
