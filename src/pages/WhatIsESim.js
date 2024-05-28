import { useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import Section1 from "../components/Section1";
import { useNavigate } from "react-router-dom";
import Background1 from "../components/Background1";
import "./WhatIsESim.css";

const WhatIsESim = () => {
  const navigate = useNavigate();

  const onLinkButtonClick = useCallback(() => {
    navigate("/support");
  }, [navigate]);

  return (
    <div className="what-is-e-sim">
      <main className="main2">
        <FrameComponent9 />
        <FrameComponent8 />
        <section className="frame-section">
          <div className="frame-wrapper125">
            <div className="frame-parent3">
              <div className="an-unmatched-global-footprint-wrapper">
                <h1 className="an-unmatched-global-container">
                  <span>{`An Unmatched `}</span>
                  <b className="global-footprint">Global Footprint</b>
                </h1>
              </div>
              <p className="dive-into-the-container">
                <span className="dive-into-the">
                  Dive into the vastness of our eSIM solution with 800+ mobile
                  networks across the globe, offering the
                </span>
                <span className="most-comprehensive-internation">
                  most comprehensive international coverage. With AxyxLink, the
                  world is truly in your hands.
                </span>
              </p>
            </div>
          </div>
          <div className="image-parent">
            <img
              className="image-icon9"
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
            <img
              className="image-icon10"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
            <img
              className="image-icon11"
              loading="lazy"
              alt=""
              src="/image-31@2x.png"
            />
            <img
              className="image-icon12"
              loading="lazy"
              alt=""
              src="/image-41@2x.png"
            />
            <img
              className="image-icon13"
              loading="lazy"
              alt=""
              src="/image-51@2x.png"
            />
            <img className="image-icon14" alt="" src="/image-61@2x.png" />
            <img className="image-icon15" alt="" src="/image-71@2x.png" />
            <img className="image-icon16" alt="" src="/image-81@2x.png" />
            <img className="image-icon17" alt="" src="/image-91@2x.png" />
            <img
              className="image-icon18"
              loading="lazy"
              alt=""
              src="/image-10@2x.png"
            />
            <img
              className="image-icon19"
              loading="lazy"
              alt=""
              src="/image-111@2x.png"
            />
            <img
              className="image-icon20"
              loading="lazy"
              alt=""
              src="/image-12@2x.png"
            />
            <img
              className="image-icon21"
              loading="lazy"
              alt=""
              src="/image-13@2x.png"
            />
            <img
              className="image-icon22"
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
            <img className="image-icon23" alt="" src="/image-15@2x.png" />
            <img className="image-icon24" alt="" src="/image-16@2x.png" />
            <img className="image-icon25" alt="" src="/image-17@2x.png" />
            <img className="image-icon26" alt="" src="/image-18@2x.png" />
          </div>
          <Section1 />
          <div className="section2">
            <div className="effortless-global-connectivity-wrapper">
              <h1 className="effortless-global-connectivity-container">
                <span className="effortless-global-connectivity-container1">
                  <span>{`Effortless Global Connectivity in `}</span>
                  <b>
                    <span className="easy-steps">4 Easy Steps</span>
                    <span className="span">:</span>
                  </b>
                </span>
              </h1>
            </div>
            <div className="background-group">
              <div className="background">
                <div className="background-wrapper">
                  <img
                    className="background-icon3"
                    loading="lazy"
                    alt=""
                    src="/background.svg"
                  />
                </div>
                <div className="heading-2-1-choose-your-pac-wrapper">
                  <b className="heading-2138">1. Choose Your Package</b>
                </div>
                <p className="based-on-where-container">
                  <span className="based-on-where">
                    Based on where you’re going and your specific
                  </span>
                  <span className="needs-get-the">
                    needs, get the ideal solution at transparent
                  </span>
                  <span className="rates">rates.</span>
                </p>
              </div>
              <div className="background1">
                <div className="background-container">
                  <img
                    className="background-icon4"
                    loading="lazy"
                    alt=""
                    src="/background-1.svg"
                  />
                </div>
                <div className="heading-2-2-scan-the-code-wrapper">
                  <b className="heading-2139">2. Scan The Code</b>
                </div>
                <p className="youll-get-a-container">
                  <span className="youll-get-a">
                    You’ll get a QR code after payment. Simply
                  </span>
                  <span className="scan-it-with">
                    scan it with your smartphone or tablet to install
                  </span>
                  <span className="your-esim">your eSIM.</span>
                </p>
              </div>
              <div className="background2">
                <div className="background-frame">
                  <img
                    className="background-icon5"
                    loading="lazy"
                    alt=""
                    src="/background-2.svg"
                  />
                </div>
                <div className="heading-2-3-switch-to-esim-wrapper">
                  <b className="heading-2140">3. Switch To eSIM</b>
                </div>
                <p className="when-you-land-container">
                  <span className="when-you-land">
                    When you land in your destination, make your
                  </span>
                  <span className="esim-the-primary">
                    eSIM the primary data connection on your
                  </span>
                  <span className="smartphone-or-tablet">
                    smartphone or tablet.
                  </span>
                </p>
              </div>
              <div className="background3">
                <div className="background-wrapper1">
                  <img
                    className="background-icon6"
                    loading="lazy"
                    alt=""
                    src="/background-3.svg"
                  />
                </div>
                <div className="heading-2-4-connect-to-netw-wrapper">
                  <b className="heading-2141">4. Connect To Network</b>
                </div>
                <p className="enable-roaming-to-container">
                  <span className="enable-roaming-to">
                    Enable roaming to join the local network and
                  </span>
                  <span className="enjoy-connected-travel">
                    enjoy connected travel with 24/7/365 support
                  </span>
                  <span className="available">available.</span>
                </p>
              </div>
            </div>
            <div className="section-inner">
              <div className="need-help-go-to-our-support-p-parent">
                <p className="need-help-go-container">
                  <span className="need-help">{`Need help? `}</span>
                  <span>
                    Go to our SUPPORT page for FAQs and troubleshooting.
                  </span>
                </p>
                <div className="link-button-wrapper1">
                  <Button
                    className="link-button4"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#b529ac",
                      border: "#b529ac solid 2px",
                      borderRadius: "6px",
                      "&:hover": { background: "#b529ac" },
                      width: 178.2,
                      height: 56,
                    }}
                    onClick={onLinkButtonClick}
                  >
                    Visit Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Background1 />
        </section>
        <footer className="section3">
          <div className="container-group">
            <div className="container1">
              <div className="sim-card-1-container">
                <img
                  className="sim-card-1-icon2"
                  loading="lazy"
                  alt=""
                  src="/simcard-1-1@2x.png"
                />
                <div className="axyx-link-container">
                  <b className="axyx-link2">AXYX LINK</b>
                </div>
              </div>
              <div className="get-better-connections-with-yo-group">
                <p className="get-better-connections-container1">
                  <span className="get-better-connections1">
                    Get better connections with your world. AxyxLink
                  </span>
                  <span className="esims-deliver-fixed-rate1">
                    eSIMs deliver fixed-rate data at predictable prices. All the
                  </span>
                  <span className="service-no-roaming1">
                    service. No roaming. No surprises.
                  </span>
                </p>
                <div className="background-parent1">
                  <img
                    className="background-icon7"
                    loading="lazy"
                    alt=""
                    src="/background-4.svg"
                  />
                  <img
                    className="background-icon8"
                    loading="lazy"
                    alt=""
                    src="/background-4.svg"
                  />
                  <img
                    className="background-icon9"
                    loading="lazy"
                    alt=""
                    src="/background-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-wrapper126">
              <div className="frame-parent4">
                <div className="heading-2-site-links-group">
                  <b className="heading-2142">Site Links</b>
                  <div className="link-home-group">
                    <a
                      className="link-home1"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-2"
                      target="_blank"
                    >
                      Home
                    </a>
                    <a
                      className="link-choose1"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-3472"
                      target="_blank"
                    >
                      Choose a Destination
                    </a>
                    <a
                      className="link-what1"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-21222"
                      target="_blank"
                    >
                      What is an eSIM?
                    </a>
                    <a
                      className="link-get1"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-21924"
                      target="_blank"
                    >
                      Get Support
                    </a>
                    <a
                      className="link-contact1"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-22393"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="frame-parent5">
                  <div className="heading-2-important-informat-group">
                    <b className="heading-2143">Important Information</b>
                    <div className="link-terms-and-conditions-group">
                      <div className="link-terms1">Terms and Conditions</div>
                      <a className="link-privacy1">Privacy Policy</a>
                      <div className="link-affiliates1">Affiliates</div>
                    </div>
                  </div>
                  <div className="heading-2-user-profile-group">
                    <b className="heading-2144">User Profile</b>
                    <div className="link-sign-up-group">
                      <div className="link-sign1">Sign Up</div>
                      <a
                        className="link-log1"
                        href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-22996"
                        target="_blank"
                      >
                        Log In
                      </a>
                    </div>
                  </div>
                </div>
                <div className="heading-2-supported-regions-group">
                  <b className="heading-2145">Supported Regions</b>
                  <div className="link-africa-group">
                    <div className="link-africa1">Africa</div>
                    <div className="link-asia1">Asia</div>
                    <div className="link-caribbean1">Caribbean</div>
                    <div className="link-europe1">Europe</div>
                    <div className="link-latam1">LATAM</div>
                    <div className="link-middle1">Middle East</div>
                    <div className="link-north1">North America</div>
                    <div className="link-oceania1">Oceania</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <img
          className="imagebackground-icon2"
          loading="lazy"
          alt=""
          src="/imagebackground1.svg"
        />
      </main>
    </div>
  );
};

export default WhatIsESim;
