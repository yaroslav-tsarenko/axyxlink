import { Button } from "@mui/material";
import "./Nav4.css";

const Nav4 = ({ className = "" }) => {
  return (
    <header className={`nav9 ${className}`}>
      <div className="link-image4" />
      <div className="nav-inner6">
        <div className="sim-card-1-parent10">
          <img
            className="sim-card-1-icon13"
            loading="lazy"
            alt=""
            src="/simcard-1@2x.png"
          />
          <div className="axyx-link-wrapper6">
            <a className="axyx-link13">AXYX LINK</a>
          </div>
        </div>
      </div>
      <div className="frame-parent22">
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
          className="input6"
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
      <nav className="nav-inner7">
        <nav className="link-sign-up-parent5">
          <a className="link-sign9">Sign Up</a>
          <div className="div5">|</div>
          <a className="link-log8">Log In</a>
        </nav>
      </nav>
    </header>
  );
};

export default Nav4;
