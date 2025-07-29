import { NavLink } from "react-router-dom";

export default function Link({ children, to, className }) {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
}
