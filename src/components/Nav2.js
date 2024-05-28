import { Button } from "@mui/material";
import "./Nav2.css";

const Nav2 = ({ className = "" }) => {
  return (
    <header className={`nav7 ${className}`}>
      <div className="link-image2" />
      <div className="nav-inner2">
        <div className="sim-card-1-parent7">
          <img
            className="sim-card-1-icon10"
            loading="lazy"
            alt=""
            src="/simcard-1@2x.png"
          />
          <div className="axyx-link-wrapper3">
            <a className="axyx-link10">AXYX LINK</a>
          </div>
        </div>
      </div>
      <div className="frame-parent10">
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
          className="input4"
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
      <nav className="nav-inner3">
        <nav className="link-sign-up-parent3">
          <a className="link-sign6">Sign Up</a>
          <div className="space">|</div>
          <a className="link-log5">Log In</a>
        </nav>
      </nav>
    </header>
  );
};



export default Nav2;
