import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Nav1 from "../components/Nav1";
import Section1 from "../components/Section1";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <main className="main1">
        <Nav1 />
        <section className="frame-parent">
          <div className="container-parent">
            <div className="container">
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="logo-authsvg-fill" />
              <h2 className="heading-1">Welcome to AxyxLink</h2>
              <div className="worldwide-services-wallet-fri-wrapper">
                <p className="worldwide-services-wallet-fri">
                  Worldwide Services, Wallet-Friendly Prices.
                </p>
              </div>
            </div>
            <div className="form">
              <div className="frame-group">
                <div className="label-email-address-parent">
                  <div className="label-email">Email Address</div>
                  <TextField
                    className="input"
                    placeholder="joe.smith@gmail.com"
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
                </div>
                <div className="label-password-parent">
                  <div className="label-password">Password</div>
                  <TextField
                    className="input1"
                    placeholder="••••••••••••"
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
                </div>
                <a
                  className="link-forgot"
                  href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-29497"
                  target="_blank"
                >
                  Forgot password?
                </a>
                <div className="button-wrapper">
                  <Button
                    className="button"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "18",
                      background: "#d7d7d7",
                      border: "#b529ac solid 2px",
                      borderRadius: "6px",
                      "&:hover": { background: "#d7d7d7" },
                      width: 227,
                      height: 56,
                    }}
                  >
                    Log In
                  </Button>
                </div>
              </div>
              <div className="paragraphhorizontalborder">
                <div className="dont-have-an">Don't have an account?</div>
                <b className="link-sign">Sign Up</b>
              </div>
            </div>
          </div>
          <Section1 />
        </section>
        <div className="nav1">
          <div className="backgroundshadow1">
            <img
              className="button-activate-mobile-searc1"
              alt=""
              src="/button--activate-mobile-search.svg"
            />
            <div className="button-toggle-menu-svg1" />
            <img className="vector-icon3" alt="" src="/vector.svg" />
            <img className="vector-icon4" alt="" src="/vector.svg" />
            <img className="vector-icon5" alt="" src="/vector.svg" />
            <div className="sim-card-1-group">
              <img
                className="sim-card-1-icon1"
                alt=""
                src="/simcard-1@2x.png"
              />
              <b className="axyx-link1">AXYX LINK</b>
            </div>
          </div>
        </div>
        <img
          className="imagebackground-icon1"
          loading="lazy"
          alt=""
          src="/imagebackground.svg"
        />
      </main>
    </div>
  );
};

export default Login;
