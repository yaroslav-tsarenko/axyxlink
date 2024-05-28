import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <div className={`section15 ${className}`}>
      <div className="section-inner4">
        <div className="reach-out-and-connect-parent">
          <h1 className="reach-out-and-container">
            <b className="reach-out">Reach Out</b>
            <span> and Connect.</span>
          </h1>
          <div className="please-complete-the-form-below-wrapper">
            <div className="please-complete-the">
              Please complete the form below should you wish to get hold of us.
            </div>
          </div>
        </div>
      </div>
      <form className="frame-form">
        <div className="frame-parent46">
          <div className="frame-parent47">
            <div className="frame-parent48">
              <div className="label-name-parent">
                <div className="label-name">Name*</div>
                <TextField
                  className="input6"
                  placeholder="Jean Smith"
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
              <div className="label-phone-number-parent">
                <div className="label-phone">Phone Number</div>
                <TextField
                  className="overlayshadow"
                  placeholder="+1"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                    "& .MuiInputBase-root": {
                      height: "48px",
                      backgroundColor: "#4c4c4c",
                      borderRadius: "6px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                  }}
                />
              </div>
              <div className="esim-iccid-parent">
                <div className="esim-iccid">eSim ICCID</div>
                <div className="background18">
                  <div className="i">i</div>
                </div>
              </div>
            </div>
            <div className="frame-parent49">
              <div className="label-email-address-parent">
                <div className="label-email">Email Address*</div>
                <TextField
                  className="input7"
                  placeholder="info@example.com"
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
              <div className="label-device-parent">
                <div className="label-device">Device</div>
                <TextField
                  className="input8"
                  placeholder="iPhone 14"
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
            </div>
          </div>
          <TextField
            className="input9"
            placeholder="89XXXXXXXXXXXXXXXXXX"
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
        <div className="label-message-parent">
          <b className="label-message">Message*</b>
          <div className="overlayshadow1">
            <div className="textarea" />
          </div>
        </div>
        <div className="button-frame">
          <Button
            className="button2"
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
              width: 193.7,
              height: 56,
            }}
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Section2;
