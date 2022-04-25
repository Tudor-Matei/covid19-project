import React from "react";

export default function StructureDescription({
  align,
  title,
  children,
}: {
  align: "left" | "right" | "center";
  title: string;
  children: string;
}) {
  return (
    <div style={{ textAlign: align }} className="structure-description">
      <h2>{title}</h2>
      <p>{children}</p>
      <hr />
    </div>
  );
}
