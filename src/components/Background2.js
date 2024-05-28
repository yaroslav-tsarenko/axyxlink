import "./Background2.css";

const Background2 = ({ className = "" }) => {
  return (
    <div className={`background17 ${className}`}>
      <div className="how-to-contact-us-wrapper">
        <h1 className="how-to-contact-container">
          <span className="how-to-contact-container1">
            <span>{`How to `}</span>
            <b>Contact Us</b>
          </span>
        </h1>
      </div>
      <div className="backgroundshadow9">
        <div className="heading-3-product-support-wrapper">
          <h2 className="heading-33">Product Support</h2>
        </div>
        <p className="if-our-support-container">
          <span className="if-our-support-page-didnt-do">
            <span className="if-our">{`If our `}</span>
            <span className="support-page">Support Page</span>
            <span>
              {" "}
              didn't do the trick, don't hesitate to reach out to us and we will
              solve your eSIM
            </span>
          </span>
          <span className="related-problems">
            <span>related problems.</span>
          </span>
        </p>
        <div className="link-button-wrapper5">
          <div className="link-button11">
            <img
              className="whatsappsvg-icon"
              loading="lazy"
              alt=""
              src="/whatsappsvg.svg"
            />
            <div className="whatsapp-us-on-13322371910-wrapper">
              <div className="whatsapp-us-on">WhatsApp us on +13322371910</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Background2;
