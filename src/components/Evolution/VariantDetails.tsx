import React, { HTMLAttributes, ReactElement } from "react";
import { InView } from "react-intersection-observer";

export default function VariantDetails({
  variantType,
  variantCodename,
  countryOfOriginSVG,
  children,
}: {
  htmlAttributes?: HTMLAttributes<any>;
  variantType: string;
  variantCodename: string;
  countryOfOriginSVG: string;
  children: (ReactElement | ReactElement[])[];
}) {
  return (
    <InView threshold={0.2}>
      {({ ref, inView }) => (
        <div className="variant" ref={ref}>
          <div className="variant__title">
            <h1>Varianta {variantType}</h1>
            <div className={`variant__title-image ${inView ? "is-in-view" : ""}`}></div>
            <h1>{variantCodename}</h1>
          </div>
          <div className="variant__main-details">
            <ul>{children[0]}</ul>
            <div
              className="variant__country-of-origin"
              style={{ background: `url(${countryOfOriginSVG}) center center / contain no-repeat` }}
            ></div>
          </div>
          <div className="variant__general-details">
            <ul>{children[1]}</ul>
          </div>
        </div>
      )}
    </InView>
  );
}
