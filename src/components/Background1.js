import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={`background14 ${className}`}>
      <div className="commonly-asked-questions-frame">
        <h1 className="commonly-asked-questions-container1">
          <span>{`Commonly Asked `}</span>
          <b className="questions2">Questions:</b>
        </h1>
      </div>
      <div className="border-group">
        <div className="border3">
          <div className="what-is-an">
            What is an eSIM and how does it work?
          </div>
          <div className="svg-wrapper1">
            <img className="svg-icon3" loading="lazy" alt="" src="/svg-1.svg" />
          </div>
        </div>
        <div className="border4">
          <div className="is-an-esim">Is an eSIM better than a SIM card?</div>
          <div className="svg-wrapper2">
            <img className="svg-icon4" loading="lazy" alt="" src="/svg-1.svg" />
          </div>
        </div>
      </div>
      <div className="heading-2-additional-informa-container">
        <h3 className="heading-2211">Additional Information</h3>
      </div>
      <div className="backgroundshadow7">
        <div className="backgroundshadow-inner3">
          <div className="heading-2-what-is-an-esim-parent">
            <h1 className="heading-2212">What is an eSIM</h1>
            <p className="top-phone-companies">
              Top phone companies are gradually adopting eSIM, which simplifies
              adding a second line to your phone without going to a carrier
              store or changing carriers.
            </p>
          </div>
        </div>
        <div className="the-creation-of-esims-has-revo-wrapper">
          <p className="the-creation-of-container">
            <span className="the-creation-of">
              The creation of eSIMs has revolutionized communications and
              technology. In return for more reasonable charges than data
              roaming fees, they let smartphone users who are traveling overseas
              stay online and surf the
            </span>
            <span className="internet-in-their">
              internet in their new country.
            </span>
          </p>
        </div>
        <div className="frame-parent39">
          <div className="heading-3-strong-emphasis-wrapper">
            <h2 className="heading-3">But what is an eSIM?</h2>
          </div>
          <p className="esims-are-digital">
            eSIMs are digital versions of conventional physical SIM cards. Both
            varieties share the common objective of linking the user to data
            services and a local phone number; yet, they differ fundamentally
            from each other,
          </p>
          <TextField
            className="gradient1"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "96px",
                backgroundColor:
                  "linear-gradient(0deg, #4c4c4c 30%, rgba(76, 76, 76, 0.9) 50%, rgba(76, 76, 76, 0))",
                borderRadius: "0px 0px 0px 0px",
              },
              width: "1728px",
            }}
          />
        </div>
      </div>
      <div className="button-container">
        <Button
          className="button1"
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
            width: 320,
            height: 56,
          }}
        >
          Show More
        </Button>
      </div>
    </div>
  );
};



export default Background1;
