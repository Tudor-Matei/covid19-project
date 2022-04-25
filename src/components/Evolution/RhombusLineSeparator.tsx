import React from "react";

export default function RhombusLineSeparator({
  invertedOrder = false,
  accent,
}: {
  invertedOrder?: boolean;
  accent: "primary-1" | "primary-2";
}) {
  return (
    <div
      className="rhombus-line-separator"
      style={{ backgroundColor: `var(--accent-${accent})`, transform: `rotateZ(${invertedOrder ? "180deg" : "0deg"})` }}
    ></div>
  );
}
