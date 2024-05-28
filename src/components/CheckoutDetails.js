import { Button } from "@mui/material";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details4 ${className}`}>
      <div className="header-container">
        <Button
          className="header5"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#000",
            borderRadius: "5px",
            "&:hover": { background: "#000" },
          }}
        >
          Checkout Details
        </Button>
      </div>
      <div className="total-containers">
        <div className="total-labels-containers">
          <b className="cart-subtotal1">Cart Subtotal</b>
          <b className="total-separators">$360.00</b>
        </div>
      </div>
      <div className="tax-labels-container-wrapper">
        <div className="tax-labels-container">
          <div className="tax-labels">
            <b className="shipping-handling1">{`Shipping & Handling`}</b>
            <b className="other-taxes1">Other Taxes</b>
          </div>
          <div className="tax-labels1">
            <b className="b2">$0.00</b>
            <b className="b3">$0.00</b>
          </div>
        </div>
      </div>
      <div className="checkout-details-inner2">
        <div className="frame-child1" />
      </div>
      <div className="total-containers1">
        <div className="grand-total-group">
          <b className="grand-total1">Grand Total</b>
          <b className="b4">$360.00</b>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
