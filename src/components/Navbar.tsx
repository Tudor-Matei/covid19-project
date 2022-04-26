import React, { useEffect, useRef } from "react";
import AnimatedNavLink from "./AnimatedNavLink";

export default function Navbar() {
  const navbarReference = useRef();
  useEffect(() => {
    const navbarDOMElement: HTMLElement = navbarReference.current as HTMLElement;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) navbarDOMElement.classList.add("nav--unstuck");
      else navbarDOMElement.classList.remove("nav--unstuck");
    });
  }, []);

  return (
    <>
      <nav ref={navbarReference}>
        {[
          ["/", "Acasă"],
          ["/evolutie", "Evoluție"],
          ["/structura", "Structură"],
          ["/impact", "Impact"],
          ["/surse", "Surse"],
        ].map(([path, linkTitle], indexKey) => (
          <AnimatedNavLink
            key={`path__${path}-${indexKey}`}
            to={path}
            animationDuration={1500}
            classNameOnCurrent="nav--selected"
            onBeforeChange={() => {
              document.body.classList.add("page-change");
            }}
            onAfterChange={() => document.body.classList.remove("page-change")}
          >
            {linkTitle}
          </AnimatedNavLink>
        ))}
      </nav>
    </>
  );
}
