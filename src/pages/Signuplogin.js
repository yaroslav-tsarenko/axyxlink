import Nav from "../components/Nav";
import FrameComponent1 from "../components/FrameComponent1";
import Section from "../components/Section";
import "./Signuplogin.css";

const Signuplogin = () => {
  return (
    <div className="signuplogin">
      <main className="main">
        <Nav />
        <FrameComponent1 />
        <Section />
        <div className="nav">
          <div className="backgroundshadow">
            <img
              className="button-activate-mobile-searc"
              alt=""
              src="/button--activate-mobile-search.svg"
            />
            <div className="button-toggle-menu-svg" />
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector.svg" />
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <div className="sim-card-1-parent">
              <img className="sim-card-1-icon" alt="" src="/simcard-1@2x.png" />
              <b className="axyx-link">AXYX LINK</b>
            </div>
          </div>
        </div>
        <img
          className="imagebackground-icon"
          loading="lazy"
          alt=""
          src="/imagebackground.svg"
        />
      </main>
    </div>
  );
};

export default Signuplogin;
