import "./HorizontalBorder.css";

const HorizontalBorder = ({ className = "" }) => {
  return (
    <div className={`horizontalborder4 ${className}`}>
      <div className="copyright-2024-wrapper2">
        <div className="copyright-20244">Copyright © 2024</div>
      </div>
      <div className="visasvg-parent2">
        <img
          className="visasvg-icon4"
          loading="lazy"
          alt=""
          src="/visasvg.svg"
        />
        <img
          className="apple-paysvg-icon4"
          loading="lazy"
          alt=""
          src="/visasvg.svg"
        />
        <div className="google-paysvg8">
          <div className="google-paysvg-fill4">
            <div className="google-paysvg9">
              <img className="layer-icon4" alt="" src="/layer.svg" />
              <div className="google-pay-primary-logo-logo-s4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HorizontalBorder;
