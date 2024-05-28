import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import Section from "../components/Section";
import "./GlobalDesc.css";

const GlobalDesc = () => {
  return (
    <div className="global-desc">
      <main className="main">
        <FrameComponent1 />
        <section className="global-data-esim-parent">
          <h1 className="global-data-esim-container">
            <b className="global">Global</b>
            <span> data eSIM</span>
          </h1>
          <div className="backgroundshadow-parent">
            <div className="backgroundshadow">
              <div className="asvg-parent">
                <div className="asvg">
                  <div className="asvg-fill">
                    <div className="asvg1">
                      <img
                        className="rectangle-icon"
                        loading="lazy"
                        alt=""
                        src="/rectangle@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="global-wrapper">
                  <b className="global1">Global</b>
                </div>
              </div>
              <div className="frame-parent">
                <div className="frame-group">
                  <div className="coverage-wrapper">
                    <div className="coverage">Coverage</div>
                  </div>
                  <Button
                    className="button"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "18",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "#fff solid 2px",
                      borderRadius: "6px",
                      "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
                      width: 176.6,
                      height: 56,
                    }}
                  >
                    79 Countries
                  </Button>
                </div>
                <div className="separator" />
                <div className="price-parent">
                  <div className="price">Price</div>
                  <b className="us1450">US$14.50</b>
                </div>
                <div className="separator1" />
                <div className="data-parent">
                  <div className="data">Data</div>
                  <b className="gb">1 GB</b>
                </div>
                <div className="separator2" />
                <div className="validity-parent">
                  <div className="validity">Validity</div>
                  <b className="days">7 Days</b>
                </div>
              </div>
              <div className="form-wrapper">
                <div className="form">
                  <div className="enter-your-email-address-to-co-wrapper">
                    <p className="enter-your-email">
                      Enter your email address to continue as a guest:
                    </p>
                  </div>
                  <TextField
                    className="input"
                    placeholder="Email"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                      "& .MuiInputBase-root": {
                        height: "48px",
                        backgroundColor: "#4c4c4c",
                        borderRadius: "6px",
                      },
                      "& .MuiInputBase-input": { color: "#bbb" },
                    }}
                  />
                  <div className="already-have-an-account-log-i-wrapper">
                    <div className="already-have-an-container">
                      <span>{`Already have an account? `}</span>
                      <span className="log-in">Log In</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <div className="frame-wrapper">
                  <div className="i-have-read-and-accepted-the-parent">
                    <div className="i-have-read">
                      I have read and accepted the
                    </div>
                    <div className="terms-conditions">{`Terms & Conditions`}</div>
                    <div className="and">and</div>
                  </div>
                </div>
                <div className="frame-div">
                  <div className="input-parent">
                    <input className="input1" type="checkbox" />
                    <div className="frame-wrapper1">
                      <div className="frame-parent1">
                        <div className="link-privacy-policy-wrapper">
                          <div className="link-privacy-container">
                            <span>Privacy Policy.</span>
                            <span className="span">{` `}</span>
                          </div>
                        </div>
                        <div className="i-also-acknowledge">
                          I also acknowledge that in order for the
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="esim-to-work-my-device-needs-wrapper">
                    <p className="esim-to-work-container">
                      <span className="esim-to-work-my-device-needs">
                        <span>{`eSIM to work, my device needs to be `}</span>
                        <b className="esim-compatible">eSIM compatible</b>
                        <span className="and1"> and</span>
                      </span>
                      <span className="not-locked-to-any-specific-net">
                        <b>not locked to any specific network.</b>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <Button
                className="button1"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#020202",
                  fontSize: "18",
                  background: "#d7d7d7",
                  border: "#30a7bf solid 2px",
                  borderRadius: "6px",
                  "&:hover": { background: "#d7d7d7" },
                  height: 56,
                }}
              >
                Buy Now
              </Button>
            </div>
            <div className="frame-parent2">
              <div className="information-parent">
                <h2 className="information">Information:</h2>
                <div className="frame-parent3">
                  <div className="frame-parent4">
                    <div className="this-data-package-works-on-unl-wrapper">
                      <div className="this-data-package">{`This data package works on UNLOCKED `}</div>
                    </div>
                    <u className="esim-compatible-devices">
                      eSIM compatible devices.
                    </u>
                  </div>
                  <div className="it-provides-1gb">
                    It provides 1GB of data valid over 7 days.
                  </div>
                </div>
              </div>
              <div className="heading-4-product-duration-parent">
                <h3 className="heading-4">Product Duration:</h3>
                <div className="packages-will-last-the-full-va-parent">
                  <p className="packages-will-last">
                    Packages will last the full validity period as specified
                    above, unless all the
                  </p>
                  <p className="data-is-used">
                    data is used before then. Any unused data will expire after
                    the validity
                  </p>
                  <p className="period-ends-this">
                    period ends. This package must be activated within 60 days
                    from purchase.
                  </p>
                  <p className="activation-occurs-when">
                    Activation occurs when the eSIM is turned on within the
                    country or region it
                  </p>
                  <div className="was-purchased-for">was purchased for.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section />
        <div className="nav">
          <div className="backgroundshadow1">
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
      </main>
    </div>
  );
};

export default GlobalDesc;
