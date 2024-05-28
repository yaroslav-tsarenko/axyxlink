import { Button } from "@mui/material";
import "./SignInDesktop.css";

const SignInDesktop = ({ className = "" }) => {
  return (
    <section className={`sign-in-desktop ${className}`}>
      <div className="sign-in1">
        <div className="frame-parent26">
          <div className="sign-in-parent">
            <b className="sign-in2">Sign in</b>
            <div className="sign-in-to">
              Sign in to your account to see products catered to you
            </div>
          </div>
          <form className="frame-parent27">
            <div className="username-group">
              <div className="username1">Username</div>
              <img className="frame-child7" alt="" src="/frame-153-1.svg" />
            </div>
            <div className="password-group">
              <div className="password1">Password</div>
              <img className="frame-child8" alt="" src="/frame-153-2.svg" />
            </div>
            <Button
              className="button10"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "4px",
                "&:hover": { background: "#000" },
                height: 38,
              }}
            >
              Sign in
            </Button>
          </form>
          <div className="or-sign-in">or, sign in with</div>
          <div className="frame-parent28">
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/frame-1581.svg"
            />
            <img
              className="frame-child10"
              loading="lazy"
              alt=""
              src="/frame-1581.svg"
            />
            <img
              className="frame-child11"
              loading="lazy"
              alt=""
              src="/frame-1581.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

SignInDesktop.propTypes = {
  className: PropTypes.string,
};

export default SignInDesktop;
