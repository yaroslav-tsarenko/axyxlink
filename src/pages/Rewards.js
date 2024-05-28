import Nav2 from "../components/Nav2";
import Section2 from "../components/Section2";
import FrameComponent2 from "../components/FrameComponent2";
import "./Rewards.css";

const Rewards = () => {
  return (
    <div className="rewards">
      <main className="main2">
        <Nav2 />
        <section className="section-parent">
          <Section2 />
          <footer className="section">
            <FrameComponent2 />
            <div className="horizontalborder">
              <div className="copyright-2024-wrapper">
                <div className="copyright-2024">Copyright © 2024</div>
              </div>
              <div className="visasvg-parent">
                <img
                  className="visasvg-icon"
                  loading="lazy"
                  alt=""
                  src="/visasvg.svg"
                />
                <img
                  className="apple-paysvg-icon"
                  loading="lazy"
                  alt=""
                  src="/visasvg.svg"
                />
                <div className="google-paysvg">
                  <div className="google-paysvg-fill">
                    <div className="google-paysvg1">
                      <img
                        className="layer-icon"
                        loading="lazy"
                        alt=""
                        src="/layer.svg"
                      />
                      <div className="google-pay-primary-logo-logo-s" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
        <div className="nav2">
          <div className="backgroundshadow2">
            <img
              className="button-activate-mobile-searc2"
              alt=""
              src="/button--activate-mobile-search.svg"
            />
            <div className="button-toggle-menu-svg2" />
            <img className="vector-icon6" alt="" src="/vector.svg" />
            <img className="vector-icon7" alt="" src="/vector.svg" />
            <img className="vector-icon8" alt="" src="/vector.svg" />
            <div className="sim-card-1-container">
              <img
                className="sim-card-1-icon2"
                alt=""
                src="/simcard-1@2x.png"
              />
              <b className="axyx-link2">AXYX LINK</b>
            </div>
          </div>
        </div>
        <img
          className="imagebackground-icon2"
          loading="lazy"
          alt=""
          src="/imagebackground.svg"
        />
      </main>
    </div>
  );
};

export default Rewards;
