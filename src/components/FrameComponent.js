import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`container-parent2 ${className}`}>
      <div className="container4">
        <div className="sim-card-1-parent6">
          <img className="sim-card-1-icon8" alt="" src="/simcard-1-1@2x.png" />
          <div className="axyx-link-wrapper3">
            <b className="axyx-link8">AXYX LINK</b>
          </div>
        </div>
        <div className="get-better-connections-with-yo-parent2">
          <p className="get-better-connections-container4">
            <span className="get-better-connections4">
              Get better connections with your world. AxyxLink
            </span>
            <span className="esims-deliver-fixed-rate4">
              eSIMs deliver fixed-rate data at predictable prices. All the
            </span>
            <span className="service-no-roaming4">
              service. No roaming. No surprises.
            </span>
          </p>
          <div className="background-parent7">
            <img
              className="background-icon25"
              loading="lazy"
              alt=""
              src="/background-4.svg"
            />
            <img
              className="background-icon26"
              loading="lazy"
              alt=""
              src="/background-4.svg"
            />
            <img
              className="background-icon27"
              loading="lazy"
              alt=""
              src="/background-4.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-wrapper150">
        <div className="frame-parent14">
          <div className="heading-2-site-links-parent2">
            <b className="heading-2184">Site Links</b>
            <div className="link-home-parent2">
              <a
                className="link-home4"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-2"
                target="_blank"
              >
                Home
              </a>
              <a
                className="link-choose4"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-3472"
                target="_blank"
              >
                Choose a Destination
              </a>
              <a
                className="link-what4"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-21222"
                target="_blank"
              >
                What is an eSIM?
              </a>
              <a
                className="link-get4"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-21924"
                target="_blank"
              >
                Get Support
              </a>
              <a
                className="link-contact4"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-22393"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="frame-parent15">
            <div className="heading-2-important-informat-parent2">
              <b className="heading-2185">Important Information</b>
              <div className="link-terms-and-conditions-parent2">
                <div className="link-terms4">Terms and Conditions</div>
                <a className="link-privacy4">Privacy Policy</a>
                <div className="link-affiliates4">Affiliates</div>
              </div>
            </div>
            <div className="heading-2-user-profile-parent2">
              <b className="heading-2186">User Profile</b>
              <div className="link-sign-up-parent2">
                <div className="link-sign5">Sign Up</div>
                <a
                  className="link-log5"
                  href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-22996"
                  target="_blank"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
          <div className="heading-2-supported-regions-parent2">
            <b className="heading-2187">Supported Regions</b>
            <div className="link-africa-parent2">
              <div className="link-africa4">Africa</div>
              <div className="link-asia4">Asia</div>
              <div className="link-caribbean4">Caribbean</div>
              <div className="link-europe4">Europe</div>
              <div className="link-latam4">LATAM</div>
              <div className="link-middle4">Middle East</div>
              <div className="link-north4">North America</div>
              <div className="link-oceania4">Oceania</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
