import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

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
      <nav id="nav" ref={navbarReference}>
        <NavLink className={ifActiveAddClassNavLink} to={"/"}>
          Acasă
        </NavLink>
        <NavLink className={ifActiveAddClassNavLink} to={"/evolutie"}>
          Evoluție
        </NavLink>
        <NavLink className={ifActiveAddClassNavLink} to={"/structura"}>
          Structură
        </NavLink>
        <NavLink className={ifActiveAddClassNavLink} to={"/statistici"}>
          Statistici
        </NavLink>
        <NavLink className={ifActiveAddClassNavLink} to={"/impact"}>
          Impact
        </NavLink>
      </nav>
    </>
  );
}

function ifActiveAddClassNavLink({ isActive }: { isActive: boolean }): string {
  if (isActive) return "nav--selected";
  else return "";
}
