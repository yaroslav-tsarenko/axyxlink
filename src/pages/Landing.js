import { useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import FrameComponent from "../components/FrameComponent";
import HorizontalBorder from "../components/HorizontalBorder";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const onLinkButtonClick = useCallback(() => {
    navigate("/country-select");
  }, [navigate]);

  const onLinkButton2Click = useCallback(() => {
    navigate("/country-select");
  }, [navigate]);

  const onLinkButton3Click = useCallback(() => {
    navigate("/country-select");
  }, [navigate]);

  return (
    <div className="landing">
      <main className="main">
        <FrameComponent3 />
        <section className="section-wrapper">
          <img
            className="section-icon"
            loading="lazy"
            alt=""
            src="/section@2x.png"
          />
        </section>
        <section className="frame-parent">
          <div className="get-coverage-anywhere-in-the-w-wrapper">
            <h1 className="get-coverage-anywhere-container">
              <p className="get-coverage-anywhere-in-the-w">
                <span className="get">{`Get `}</span>
                <b className="coverage-anywhere">Coverage Anywhere</b>
                <span> In The World,</span>
              </p>
              <p className="the-second-you">The Second You Land.</p>
            </h1>
          </div>
          <div className="heading-2-which-of-these-pop-wrapper">
            <p className="heading-2">
              Which of these popular destinations are you going to?
            </p>
          </div>
          <FrameComponent2 />
          <FrameComponent1 />
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="link-button-wrapper">
                <div className="link-button" onClick={onLinkButtonClick}>
                  <a
                    className="view-all-countries"
                    href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-3472"
                    target="_blank"
                  >
                    View All Countries
                  </a>
                </div>
              </div>
              <h1 className="stay-connected-while-container">
                <b className="stay-connected">Stay Connected</b>
                <span> While Exploring Multiple Regions.</span>
              </h1>
            </div>
          </div>
          <div className="heading-2-which-of-these-pop-container">
            <p className="heading-21">
              Which of these popular destinations are you going to?
            </p>
          </div>
          <div className="link-parent">
            <div className="link">
              <div className="heading-2-africa-parent">
                <b className="heading-22">Africa</b>
                <div className="from-us450">From US$4.50</div>
              </div>
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className="link1">
              <div className="heading-2-asia-parent">
                <b className="heading-23">Asia</b>
                <div className="from-us4501">From US$4.50</div>
              </div>
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
            <div className="link2">
              <div className="heading-2-caribbean-parent">
                <h3 className="heading-24">Caribbean</h3>
                <div className="from-us1500">From US$15.00</div>
              </div>
              <img
                className="image-icon2"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
            <div className="link3">
              <div className="heading-2-europe-parent">
                <h3 className="heading-25">Europe</h3>
                <div className="from-us4502">From US$4.50</div>
              </div>
              <img
                className="image-icon3"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
          </div>
          <div className="link-group">
            <div className="link4">
              <div className="heading-2-latam-parent">
                <b className="heading-26">LATAM</b>
                <div className="from-us4503">From US$4.50</div>
              </div>
              <img
                className="image-icon4"
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            <div className="link5">
              <div className="heading-2-middle-east-parent">
                <b className="heading-27">Middle East</b>
                <div className="from-us4504">From US$4.50</div>
              </div>
              <img
                className="image-icon5"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
            </div>
            <div className="link6">
              <div className="heading-2-north-america-parent">
                <h3 className="heading-28">North America</h3>
                <div className="from-us4505">From US$4.50</div>
              </div>
              <img
                className="image-icon6"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="link7">
              <div className="heading-2-oceania-parent">
                <b className="heading-29">Oceania</b>
                <div className="from-us4506">From US$4.50</div>
              </div>
              <img
                className="image-icon7"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
            </div>
          </div>
          <div className="link-button-container">
            <div className="link-button1" onClick={onLinkButton2Click}>
              <a
                className="view-all-regions"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-3472"
                target="_blank"
              >
                View All Regions
              </a>
            </div>
          </div>
          <img
            className="image-icon8"
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
        </section>
        <div className="main-inner">
          <div className="going-big-on-your-global-trave-parent">
            <h1 className="going-big-on-container">
              <p className="going-big-on-your-global">
                <span className="going-big-on">{`Going Big On Your `}</span>
                <b className="global">Global</b>
              </p>
              <p className="travel">
                <b className="travel1">Travel?</b>
              </p>
            </h1>
            <div className="traveling-through-multiple-cou-parent">
              <p className="traveling-through-multiple-container">
                <span className="traveling-through-multiple">
                  Traveling through multiple countries and across multiple
                  regions? With
                </span>
                <span className="axyxlink-you-only">
                  AxyxLink, you only need one global eSIM and you can say No to
                </span>
                <span className="roaming">roaming.</span>
              </p>
              <Button
                className="link-button2"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "#fff solid 2px",
                  borderRadius: "6px",
                  "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
                  width: 193.2,
                  height: 56,
                }}
                onClick={onLinkButton3Click}
              >
                Global Options
              </Button>
            </div>
          </div>
        </div>
        <Section />
        <footer className="section">
          <FrameComponent />
          <HorizontalBorder />
        </footer>
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

export default Landing;
