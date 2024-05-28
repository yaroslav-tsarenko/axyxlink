import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="nav1">
        <div className="backgroundshadow2">
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
            <img className="sim-card-1-icon1" alt="" src="/simcard-1@2x.png" />
            <b className="axyx-link1">AXYX LINK</b>
          </div>
        </div>
      </div>
      <FrameComponent5 />
      <section className="checkout-inner">
        <form className="frame-form">
          <FrameComponent4 />
          <FrameComponent3 />
        </form>
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default Checkout;
