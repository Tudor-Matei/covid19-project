import React from "react";

export default function TopicTag({ accent, children }: { accent: "primary-1" | "primary-2"; children: string }) {
  return <div data-before={children} className={`topic-tag topic-tag--${accent}`}></div>;
}
