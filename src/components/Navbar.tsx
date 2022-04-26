import React, { useEffect, useRef } from "react";
import AnimatedNavLink from "./AnimatedNavLink";

// TODO: remove this at end
let __STRICT_MODE_EXEC__ = false;

export default function Navbar() {
  const navbarReference = useRef();
  useEffect(() => {
    if (__STRICT_MODE_EXEC__) return;
    __STRICT_MODE_EXEC__ = true;

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
            animationDuration={0}
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
