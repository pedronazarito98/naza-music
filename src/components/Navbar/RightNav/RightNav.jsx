import { NavLink, Link } from "./styles";

export function RightNav({ open }) {
  return (
    <NavLink open={open}>
      <Link to="/">Home</Link>
      <Link to="/artistas">Artistas</Link>
      <Link>Contact Us</Link>
      <Link>Sign In</Link>
      <Link>Sign Up</Link>
    </NavLink>
  );
}
