import { Icon } from "@iconify/react";
import React from "react";
import ThemedImage from "../ThemedImage";

export default function SectionTransmission({
  icon,
  title,
  image,
  invertedOrder = false,
  children,
}: {
  icon: string;
  title: string;
  image: string;
  invertedOrder?: boolean;
  children: string;
}) {
  return !invertedOrder ? (
    <>
      <div className="transmission__image">
        <ThemedImage src={image} />
      </div>
      <div className="transmission__information">
        <Icon icon={icon} className="icon" />
        <h2>{title}</h2>
        <br />
        <p>{children}</p>
      </div>
    </>
  ) : (
    <>
      <div className="transmission__information">
        <Icon icon={icon} className="icon" />
        <h2>{title}</h2>
        <br />
        <p>{children}</p>
      </div>
      <div className="transmission__image">
        <ThemedImage src={image} />
      </div>
    </>
  );
}
