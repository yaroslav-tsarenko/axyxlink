import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./DiscountCategories.css";

const DiscountCategories = ({ className = "", categoryIcons, food }) => {
  return (
    <div className={`discount-categories ${className}`}>
      <img
        className="category-icons"
        loading="lazy"
        alt=""
        src={categoryIcons}
      />
      <div className="category-labels">
        <b className="food">{food}</b>
        <div className="discount-20-off">Discount: 20% OFF</div>
      </div>
      <div className="credits-containers">
        <b className="credits-icons">$120.00</b>
        <b className="credits">12 Credits</b>
      </div>
      <div className="quantity-adjusters">
        <TextField
          className="plus-minus-containers"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "8px", marginRight: "28px" }}
              >
                <img width="16px" height="16px" src="/iconplus.svg" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ marginRight: "8px" }}>
                <img width="16px" height="16px" src="/iconminus.svg" />
              </InputAdornment>
            ),
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={{
            borderColor: "#312d2d",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#312d2d",
            borderRadius: "8px",
            width: "54.63414634146342%",
            height: "40px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              fontFamily: "Almarai",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <MenuItem value={1}>3</MenuItem>
        </TextField>
        <div className="hourly-containers">
          <div className="hourly">Hourly</div>
          <div className="hourly-sub-containers">
            <img
              className="hourly-sub-elements"
              alt=""
              src="/hourly-sub-elements.svg"
            />
          </div>
        </div>
      </div>
      <b className="hourly-icon-labels">$120.00</b>
    </div>
  );
};

DiscountCategories.propTypes = {
  className: PropTypes.string,
  categoryIcons: PropTypes.string,
  food: PropTypes.string,
};

export default DiscountCategories;
