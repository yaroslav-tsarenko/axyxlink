import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`select-a-country-to-explore-ou-parent ${className}`}>
      <h1 className="select-a-country-container">
        <b className="select-a-country">Select a Country</b>
        <span> to Explore our Packages:</span>
      </h1>
      <div className="frame-wrapper151">
        <div className="tab-parent">
          <div className="tab">
            <div className="global1">Global</div>
          </div>
          <div className="tab1">
            <div className="regions">Regions</div>
          </div>
          <div className="tab2">
            <div className="africa">Africa</div>
          </div>
          <div className="tab3">
            <div className="asia">Asia</div>
          </div>
          <div className="tab4">
            <div className="caribbean">Caribbean</div>
          </div>
          <div className="tab5">
            <div className="europe">Europe</div>
          </div>
          <div className="tab6">
            <div className="latam">LATAM</div>
          </div>
          <div className="tab7">
            <div className="middle-east">Middle East</div>
          </div>
          <div className="tab8">
            <div className="north-america">North America</div>
          </div>
          <div className="tab9">
            <div className="oceania">Oceania</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent6;
