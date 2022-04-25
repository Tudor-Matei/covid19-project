import React, { ReactElement } from "react";

export default function VariantDetails({
  variantType,
  variantCodename,
  countryOfOriginSVG,
  children,
}: {
  variantType: string;
  variantCodename: string;
  countryOfOriginSVG: string;
  children: (ReactElement | ReactElement[])[];
}) {
  return (
    <div className="variant">
      <div className="variant__title">
        <h1>Varianta {variantType}</h1>
        <div className="variant__title-image"></div>
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
  );
}
