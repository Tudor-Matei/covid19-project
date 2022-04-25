import React, { ReactElement } from "react";

export default function SideInformation({ children }: { children: ReactElement | ReactElement[] }) {
  return (
    <section className="side-information">
      <ol>{children}</ol>
    </section>
  );
}
