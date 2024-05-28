import Nav3 from "../components/Nav3";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import "./Global.css";

const Global = () => {
  return (
    <div className="global">
      <main className="main3">
        <section className="nav-parent">
          <Nav3 />
          <div className="section1">
            <img
              className="image-icon1"
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
            <h1 className="heading-11">Global</h1>
            <div className="heading-2">
              Choose from our range of eSIM packages
            </div>
          </div>
          <div className="paragraphoverlay">
            <a
              className="link-destinations"
              href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-3472"
              target="_blank"
            >
              Destinations
            </a>
            <div className="div">/</div>
            <a
              className="link-global"
              href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-23513"
              target="_blank"
            >
              Global
            </a>
          </div>
          <h1 className="available-esim-packages-container">
            <span>{`Available `}</span>
            <b className="esim-packages">eSIM Packages</b>
          </h1>
          <FrameComponent3 />
        </section>
        <footer className="section2">
          <FrameComponent2 />
          <div className="horizontalborder1">
            <div className="copyright-2024-container">
              <div className="copyright-20241">Copyright © 2024</div>
            </div>
            <div className="visasvg-group">
              <img
                className="visasvg-icon1"
                loading="lazy"
                alt=""
                src="/visasvg.svg"
              />
              <img
                className="apple-paysvg-icon1"
                loading="lazy"
                alt=""
                src="/visasvg.svg"
              />
              <div className="google-paysvg2">
                <div className="google-paysvg-fill1">
                  <div className="google-paysvg3">
                    <img
                      className="layer-icon1"
                      loading="lazy"
                      alt=""
                      src="/layer.svg"
                    />
                    <div className="google-pay-primary-logo-logo-s1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="nav3">
          <div className="backgroundshadow3">
            <img
              className="button-activate-mobile-searc3"
              alt=""
              src="/button--activate-mobile-search.svg"
            />
            <div className="button-toggle-menu-svg3" />
            <img className="vector-icon9" alt="" src="/vector.svg" />
            <img className="vector-icon10" alt="" src="/vector.svg" />
            <img className="vector-icon11" alt="" src="/vector.svg" />
            <div className="frame-div">
              <img
                className="sim-card-1-icon3"
                alt=""
                src="/simcard-1@2x.png"
              />
              <b className="axyx-link3">AXYX LINK</b>
            </div>
          </div>
        </div>
        <img
          className="imagebackground-icon3"
          loading="lazy"
          alt=""
          src="/imagebackground.svg"
        />
      </main>
    </div>
  );
};

export default Global;
