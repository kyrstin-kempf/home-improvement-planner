import { NavLink } from "react-router-dom";

function NavBar() {

  return (
      <nav className="nav-menu">
        <NavLink end to="/">Home</NavLink>
        <NavLink end to="/projects/new" id='button'>＋ New Project</NavLink>
      </nav>
  );
}

export default NavBar;