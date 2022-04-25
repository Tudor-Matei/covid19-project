import React from "react";

export default function ThemedImage({ src }: { src: string }) {
  return <div className="themed-image" style={{ background: `url(${src}) center center / cover no-repeat` }}></div>;
}
