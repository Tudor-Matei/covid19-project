import React from "react";
export default function TitleSeparator({ title }: { title: string }) {
  return (
    <header className="title-separator title-separator-evolution">
      <h1>{title}</h1>
    </header>
  );
}
