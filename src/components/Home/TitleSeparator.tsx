import React from "react";
export default function TitleSeparator({ title }: { title: string }) {
  return (
    <header className="title-separator title-separator-home">
      <hr />
      <h1 className="gradient-text-primaries-left-right">{title}</h1>
      <hr />
    </header>
  );
}
