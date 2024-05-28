import { useCallback } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "Global" to the project
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    // Please sync "AUS" to the project
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    // Please sync "CAN" to the project
  }, []);

  return (
    <div className={`link-parent1 ${className}`}>
      <div className="link132" onClick={onLinkContainerClick}>
        <div className="asvg-group">
          <div className="asvg2">
            <div className="asvg-fill1">
              <div className="asvg3">
                <img
                  className="rectangle-icon1"
                  alt=""
                  src="/rectangle@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper129">
            <div className="heading-2-global-group">
              <b className="heading-2162">Global</b>
              <a
                className="from-us14501"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-23513"
                target="_blank"
              >
                From US$14.50
              </a>
            </div>
          </div>
        </div>
        <div className="img-wrapper122">
          <img className="img-icon124" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link133" onClick={onLinkContainer1Click}>
        <div className="ausvg-group">
          <img className="ausvg-icon1" loading="lazy" alt="" src="/ausvg.svg" />
          <div className="frame-wrapper130">
            <div className="heading-2-australia-group">
              <b className="heading-2163">Australia</b>
              <a
                className="from-us45054"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-23838"
                target="_blank"
              >
                From US$4.50
              </a>
            </div>
          </div>
        </div>
        <div className="img-wrapper123">
          <img className="img-icon125" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link134" onClick={onLinkContainer2Click}>
        <div className="casvg-group">
          <img className="casvg-icon1" alt="" src="/casvg.svg" />
          <div className="frame-wrapper131">
            <div className="heading-2-canada-group">
              <b className="heading-2164">Canada</b>
              <a
                className="from-us6002"
                href="https://www.figma.com/design/hjNxmVzLnUwGhKJF4Kprcw?node-id=1-24265"
                target="_blank"
              >
                From US$6.00
              </a>
            </div>
          </div>
        </div>
        <div className="img-wrapper124">
          <img className="img-icon126" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link135">
        <div className="egsvg-group">
          <img className="egsvg-icon1" alt="" src="/egsvg.svg" />
          <div className="frame-wrapper132">
            <div className="heading-2-egypt-group">
              <b className="heading-2165">Egypt</b>
              <div className="from-us7005">From US$7.00</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper125">
          <img className="img-icon127" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link136">
        <div className="frsvg-group">
          <img className="frsvg-icon1" loading="lazy" alt="" src="/frsvg.svg" />
          <div className="frame-wrapper133">
            <div className="heading-2-france-group">
              <b className="heading-2166">France</b>
              <div className="from-us45055">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper126">
          <img className="img-icon128" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link137">
        <div className="desvg-group">
          <img className="desvg-icon1" alt="" src="/desvg.svg" />
          <div className="frame-wrapper134">
            <div className="heading-2-germany-group">
              <b className="heading-2167">Germany</b>
              <div className="from-us50013">From US$5.00</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper127">
          <img className="img-icon129" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link138">
        <div className="insvg-group">
          <img className="insvg-icon1" alt="" src="/insvg.svg" />
          <div className="frame-wrapper135">
            <div className="heading-2-india-group">
              <b className="heading-2168">India</b>
              <div className="from-us45056">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper128">
          <img className="img-icon130" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link139">
        <div className="idsvg-group">
          <img className="idsvg-icon1" alt="" src="/idsvg.svg" />
          <div className="frame-wrapper136">
            <div className="heading-2-indonesia-group">
              <b className="heading-2169">Indonesia</b>
              <div className="from-us5503">From US$5.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper129">
          <img className="img-icon131" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link140">
        <div className="itsvg-group">
          <img className="itsvg-icon1" loading="lazy" alt="" src="/itsvg.svg" />
          <div className="frame-wrapper137">
            <div className="heading-2-italy-group">
              <b className="heading-2170">Italy</b>
              <div className="from-us45057">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper130">
          <img className="img-icon132" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link141">
        <div className="mxsvg-group">
          <img className="mxsvg-icon1" alt="" src="/mxsvg.svg" />
          <div className="frame-wrapper138">
            <div className="heading-2-mexico-group">
              <b className="heading-2171">Mexico</b>
              <div className="from-us8009">From US$8.00</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper131">
          <img className="img-icon133" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link142">
        <div className="masvg-group">
          <img className="masvg-icon1" alt="" src="/masvg.svg" />
          <div className="frame-wrapper139">
            <div className="heading-2-morocco-group">
              <b className="heading-2172">Morocco</b>
              <div className="from-us80010">From US$8.00</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper132">
          <img className="img-icon134" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link143">
        <div className="omsvg-group">
          <img className="omsvg-icon1" alt="" src="/omsvg@2x.png" />
          <div className="frame-wrapper140">
            <div className="heading-2-oman-group">
              <b className="heading-2173">Oman</b>
              <div className="from-us45058">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper133">
          <img className="img-icon135" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link144">
        <div className="ptsvg-group">
          <img className="ptsvg-icon1" loading="lazy" alt="" src="/ptsvg.svg" />
          <div className="frame-wrapper141">
            <div className="heading-2-portugal-group">
              <b className="heading-2174">Portugal</b>
              <div className="from-us45059">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper134">
          <img className="img-icon136" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link145">
        <div className="sasvg-group">
          <img className="sasvg-icon1" alt="" src="/sasvg@2x.png" />
          <div className="frame-wrapper142">
            <div className="heading-2-saudi-arabia-group">
              <b className="heading-2175">Saudi Arabia</b>
              <div className="from-us50014">From US$5.00</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper135">
          <img className="img-icon137" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link146">
        <div className="essvg-group">
          <img className="essvg-icon1" alt="" src="/essvg.svg" />
          <div className="frame-wrapper143">
            <div className="heading-2-spain-group">
              <b className="heading-2176">Spain</b>
              <div className="from-us45060">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper136">
          <img className="img-icon138" alt="" src="/img.svg" />
        </div>
      </div>
      <div className="link147">
        <div className="chsvg-parent">
          <img className="chsvg-icon" alt="" src="/chsvg.svg" />
          <div className="frame-wrapper144">
            <div className="heading-2-switzerland-parent">
              <b className="heading-2177">Switzerland</b>
              <div className="from-us45061">From US$4.50</div>
            </div>
          </div>
        </div>
        <div className="img-wrapper137">
          <img className="img-icon139" alt="" src="/img.svg" />
        </div>
      </div>
    </div>
  );
};


export default FrameComponent2;
