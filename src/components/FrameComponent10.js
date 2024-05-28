import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div className={`frame-parent41 ${className}`}>
      <div className="button-select-option-parent">
        <div className="button-select-option">
          <img className="background-icon41" alt="" src="/background2.svg" />
          <div className="installation-wrapper">
            <div className="installation">Installation</div>
          </div>
          <div className="img-wrapper162">
            <img className="img-icon164" alt="" src="/img1.svg" />
          </div>
        </div>
        <div className="frame-parent42">
          <div className="button-select-option-group">
            <div className="button-select-option1">
              <img
                className="background-icon42"
                loading="lazy"
                alt=""
                src="/background-11.svg"
              />
              <div className="troubleshooting-wrapper">
                <div className="troubleshooting">Troubleshooting</div>
              </div>
              <div className="img-wrapper163">
                <img
                  className="img-icon165"
                  loading="lazy"
                  alt=""
                  src="/img1.svg"
                />
              </div>
            </div>
            <div className="button-select-option2">
              <div className="background15">
                <div className="supportsvg-parent">
                  <img
                    className="supportsvg-icon"
                    alt=""
                    src="/supportsvg.svg"
                  />
                  <div className="border5" />
                  <div className="border6" />
                </div>
              </div>
              <input
                className="button-select-option-child"
                placeholder="Support"
                type="text"
              />
              <div className="img-wrapper164">
                <img className="img-icon166" alt="" src="/img1.svg" />
              </div>
            </div>
            <div className="button-select-option3">
              <img
                className="background-icon43"
                alt=""
                src="/background-11.svg"
              />
              <input
                className="button-select-option-item"
                placeholder="General"
                type="text"
              />
              <div className="img-wrapper165">
                <img className="img-icon167" alt="" src="/img1.svg" />
              </div>
            </div>
            <div className="button-select-option4">
              <img
                className="background-icon44"
                loading="lazy"
                alt=""
                src="/background-11.svg"
              />
              <div className="about-esims-wrapper">
                <div className="about-esims">About eSIMs</div>
              </div>
              <div className="img-wrapper166">
                <img className="img-icon168" alt="" src="/img1.svg" />
              </div>
            </div>
          </div>
          <TextField
            className="input4"
            placeholder="Search for answers"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="20px" height="20px" src="/svg-1.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
              "& .MuiInputBase-root": {
                height: "56px",
                backgroundColor: "#606060",
                paddingLeft: "16px",
                borderRadius: "6px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { paddingLeft: "14px", color: "#bbb" },
            }}
          />
        </div>
        <div className="heading-3-need-more-help-parent">
          <b className="heading-31">Need More Help?</b>
          <p className="feel-free-to-container">
            <span className="feel-free-to-drop-us-a-line-wi">
              <span className="feel-free-to">{`Feel free to `}</span>
              <b className="drop-us-a">drop us a line</b>
              <span> with any</span>
            </span>
            <span className="specific-queries">
              <span>specific queries.</span>
            </span>
          </p>
        </div>
      </div>
      <div className="backgroundshadow8">
        <div className="background16">
          <div className="frame-parent43">
            <div className="heading-3-need-help-with-ins-wrapper">
              <b className="heading-32">Need help with installing your eSIM?</b>
            </div>
            <p className="to-download-our">
              To download our step-by-step installation guide, click on the
              appropriate button below:
            </p>
          </div>
          <div className="background-inner">
            <div className="link-button-parent">
              <Button
                className="link-button8"
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
                  width: 97.5,
                  height: 56,
                }}
              >
                iOS
              </Button>
              <Button
                className="link-button9"
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
                  height: 56,
                }}
              >
                Android
              </Button>
              <Button
                className="link-button10"
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
                  width: 107.8,
                  height: 56,
                }}
              >
                Pixel
              </Button>
            </div>
          </div>
        </div>
        <div className="backgroundshadow-inner4">
          <div className="frame-parent44">
            <div className="when-should-i-install-my-esim-parent">
              <div className="when-should-i1">
                When should I install my eSIM?
              </div>
              <div className="how-do-i">
                How do I install an eSIM on my iOS device?
              </div>
              <div className="how-do-i1">
                How do I install an eSIM on my Android device?
              </div>
              <div className="how-do-i2">
                How do I install an eSIM on my Pixel device?
              </div>
              <div className="how-do-i3">
                How do I scan the QR code if I only have one device (iOS)?
              </div>
              <div className="how-do-i4">
                How do I scan the QR code if I only have one device (Android)?
              </div>
              <div className="how-do-i5">
                How do I scan the QR code if I only have one device (Pixel)?
              </div>
            </div>
            <div className="frame-wrapper173">
              <div className="svg-parent">
                <img className="svg-icon5" alt="" src="/svg-1.svg" />
                <img className="svg-icon6" alt="" src="/svg-1.svg" />
                <img className="svg-icon7" alt="" src="/svg-1.svg" />
                <img className="svg-icon8" alt="" src="/svg-1.svg" />
                <img className="svg-icon9" alt="" src="/svg-1.svg" />
                <img className="svg-icon10" alt="" src="/svg-1.svg" />
                <img
                  className="svg-icon11"
                  loading="lazy"
                  alt=""
                  src="/svg-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrameComponent10;
