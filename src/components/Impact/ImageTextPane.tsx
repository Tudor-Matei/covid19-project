import React, { ReactElement } from "react";
export default function ImageTextPane({
  src,
  accent,
  children,
}: {
  src: string;
  accent: "primary-1" | "primary-2";
  children: ReactElement | ReactElement[];
}) {
  return (
    <div
      className="image-text-pane"
      style={{ backgroundColor: `var(--accent-${accent}-light-1)`, boxShadow: `var(--solid-shadow-${accent})` }}
    >
      <div
        className="image-text-pane__image"
        style={{ background: `url(${src}) center center / cover no-repeat`, color: `var(--accent-${accent}-dark-1)` }}
      ></div>
      <div className="image-text-pane__text">{children}</div>
    </div>
  );
}
