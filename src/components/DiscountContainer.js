import { Button } from "@mui/material";
import DiscountCategories from "./DiscountCategories";
import PropTypes from "prop-types";
import "./DiscountContainer.css";

const DiscountContainer = ({ className = "" }) => {
  return (
    <div className={`discount-container ${className}`}>
      <div className="header4">
        <div className="header-child" />
        <div className="header-items">
          <div className="product">Product</div>
        </div>
        <div className="header-items1">
          <div className="price1">Price</div>
        </div>
        <div className="quantity">Quantity</div>
        <div className="total">Total</div>
      </div>
      <DiscountCategories
        categoryIcons="/frame-1000006755@2x.png"
        food="Food"
      />
      <DiscountCategories
        categoryIcons="/frame-1000006755-1@2x.png"
        food="Car"
      />
      <div className="discount-categories1">
        <img
          className="discount-categories-child"
          loading="lazy"
          alt=""
          src="/frame-1000006755-2@2x.png"
        />
        <div className="travels-parent">
          <b className="travels">Travels</b>
          <div className="discount-20-off1">Discount: 20% OFF</div>
        </div>
        <div className="parent">
          <b className="b">$120.00</b>
          <b className="credits1">12 Credits</b>
        </div>
        <div className="frame-parent18">
          <div className="frame-parent19">
            <div className="icon-plus-wrapper">
              <img className="icon-plus" alt="" src="/iconplus-2.svg" />
            </div>
            <div className="div8">3</div>
            <input className="frame-input" type="checkbox" />
          </div>
          <div className="hourly-parent">
            <div className="hourly1">Hourly</div>
            <div className="frame-wrapper6">
              <img
                className="frame-inner"
                alt=""
                src="/hourly-sub-elements.svg"
              />
            </div>
          </div>
        </div>
        <b className="b1">$120.00</b>
      </div>
      <div className="line-parent">
        <div className="line-div" />
        <div className="button-container">
          <Button
            className="button7"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#010007",
              fontSize: "16",
              borderColor: "#010007",
              borderRadius: "4px",
              "&:hover": { borderColor: "#010007" },
              width: 123,
              height: 54,
            }}
          >
            Go Back
          </Button>
          <Button
            className="button8"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#312d2d",
              borderRadius: "4px",
              "&:hover": { background: "#312d2d" },
              width: 127,
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

DiscountContainer.propTypes = {
  className: PropTypes.string,
};

export default DiscountContainer;
