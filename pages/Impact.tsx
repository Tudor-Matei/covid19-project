import { NavLink } from "react-router-dom";

export default function Impact({ landingImage }: { landingImage: string }) {
  return (
    <>
      <h1>HOME!</h1>
      <NavLink style={({ isActive }) => (isActive ? { color: "red" } : {})} to="/">
        LEX GO
      </NavLink>
    </>
  );
}
