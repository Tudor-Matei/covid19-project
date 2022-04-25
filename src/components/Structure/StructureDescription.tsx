import React, { CSSProperties } from "react";

export default function StructureDescription({
  align,
  title,
  style = {},
  children,
}: {
  align: "left" | "right" | "center";
  title: string;
  style?: CSSProperties;
  children: string;
}) {
  return (
    <div style={{ ...style, textAlign: align }} className="structure-description">
      <h2>{title}</h2>
      <p>{children}</p>
      <hr />
    </div>
  );
}
