import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./SignUpDesktop.css";

const SignUpDesktop = ({ className = "" }) => {
  return (
    <section className={`sign-up-desktop ${className}`}>
      <div className="sign-in">
        <div className="sign-up-parent">
          <b className="sign-up2">Sign up</b>
          <div className="sign-up-to">
            Sign up to get rewards, and many more
          </div>
        </div>
        <form className="frame-parent21">
          <div className="frame-parent22">
            <div className="your-name-wrapper">
              <div className="your-name">Your Name</div>
            </div>
            <div className="email-wrapper">
              <div className="email">Email</div>
            </div>
          </div>
          <div className="frame-parent23">
            <TextField
              className="frame-textfield"
              placeholder="Address"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d1d1d1" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="country-parent">
              <div className="country">Country</div>
              <img className="frame-icon" alt="" src="/frame-153.svg" />
            </div>
          </div>
          <div className="frame-parent24">
            <div className="username-parent">
              <div className="username">Username</div>
              <img className="frame-child2" alt="" src="/frame-153-1.svg" />
            </div>
            <div className="password-parent">
              <div className="password">Password</div>
              <img className="frame-child3" alt="" src="/frame-153-2.svg" />
            </div>
          </div>
          <Button
            className="button9"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#010007",
              borderRadius: "4px",
              "&:hover": { background: "#010007" },
              height: 38,
            }}
          >
            Sign up
          </Button>
        </form>
        <div className="or-sign-up">or, sign up with</div>
        <div className="frame-parent25">
          <img
            className="frame-child4"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
          <img
            className="frame-child5"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
          <img
            className="frame-child6"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
        </div>
      </div>
    </section>
  );
};

SignUpDesktop.propTypes = {
  className: PropTypes.string,
};

export default SignUpDesktop;
