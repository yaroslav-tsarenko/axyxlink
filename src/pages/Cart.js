import { Button } from "@mui/material";
import DiscountContainer from "../components/DiscountContainer";
import CheckoutDetails from "../components/CheckoutDetails";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="nav2">
        <div className="backgroundshadow3">
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
            <img className="sim-card-1-icon2" alt="" src="/simcard-1@2x.png" />
            <b className="axyx-link2">AXYX LINK</b>
          </div>
        </div>
      </div>
      <section className="frame-section">
        <div className="nav-wrapper">
          <header className="nav3">
            <div className="link-image" />
            <div className="nav-inner">
              <div className="sim-card-1-parent1">
                <img
                  className="sim-card-1-icon3"
                  loading="lazy"
                  alt=""
                  src="/simcard-1@2x.png"
                />
                <div className="axyx-link-wrapper">
                  <a className="axyx-link3">AXYX LINK</a>
                </div>
              </div>
            </div>
            <div className="frame-parent5">
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
            <nav className="auth-container-wrapper">
              <nav className="auth-container">
                <a className="link-sign">Sign Up</a>
                <div className="auth-message">|</div>
                <a className="link-log">Log In</a>
              </nav>
            </nav>
          </header>
        </div>
        <div className="your-cart-parent">
          <b className="your-cart">Your Cart</b>
          <div className="indulge-your-furry">
            we look forward to many more moments of happiness and connection in
            the pawsome journey ahead.
          </div>
        </div>
      </section>
      <section className="cart-inner">
        <div className="discount-container-parent">
          <DiscountContainer />
          <CheckoutDetails />
        </div>
      </section>
      <section className="section-wrapper">
        <footer className="section">
          <div className="frame-parent6">
            <div className="image-parent">
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <p className="get-better-connections-container">
                <span className="get-better-connections">
                  Get better connections with your world. AxyxLink
                </span>
                <span className="esims-deliver-fixed-rate">
                  eSIMs deliver fixed-rate data at predictable prices. All the
                </span>
                <span className="service-no-roaming">
                  service. No roaming. No surprises.
                </span>
              </p>
              <div className="banner-background-container">
                <img
                  className="background-icon"
                  loading="lazy"
                  alt=""
                  src="/background.svg"
                />
                <img
                  className="background-icon1"
                  loading="lazy"
                  alt=""
                  src="/background.svg"
                />
                <img
                  className="background-icon2"
                  loading="lazy"
                  alt=""
                  src="/background.svg"
                />
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="site-links-container-parent">
                <div className="site-links-container">
                  <b className="heading-2">Site Links</b>
                  <div className="site-links">
                    <a
                      className="link-home"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-2"
                      target="_blank"
                    >
                      Home
                    </a>
                    <a
                      className="link-choose"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-3472"
                      target="_blank"
                    >
                      Choose a Destination
                    </a>
                    <a
                      className="link-what"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-21222"
                      target="_blank"
                    >
                      What is an eSIM?
                    </a>
                    <a
                      className="link-get"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-21924"
                      target="_blank"
                    >
                      Get Support
                    </a>
                    <a
                      className="link-contact"
                      href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-22393"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="info-links-container-parent">
                  <div className="info-links-container">
                    <b className="heading-21">Important Information</b>
                    <div className="info-links">
                      <div className="link-terms">Terms and Conditions</div>
                      <a className="link-privacy">Privacy Policy</a>
                      <div className="link-affiliates">Affiliates</div>
                    </div>
                  </div>
                  <div className="heading-2-user-profile-parent">
                    <b className="heading-22">User Profile</b>
                    <div className="profile-links">
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
                <div className="heading-2-supported-regions-parent">
                  <b className="heading-23">Supported Regions</b>
                  <div className="region-links">
                    <div className="link-africa">Africa</div>
                    <div className="link-asia">Asia</div>
                    <div className="link-caribbean">Caribbean</div>
                    <div className="link-europe">Europe</div>
                    <div className="link-latam">LATAM</div>
                    <div className="link-middle">Middle East</div>
                    <div className="link-north">North America</div>
                    <div className="link-oceania">Oceania</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <div className="google-pay-container">
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
        </footer>
      </section>
    </div>
  );
};

export default Cart;
