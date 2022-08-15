import { NavLink } from "react-router-dom";

function NavBar() {

  return (
      <nav className="nav-menu">
        {/* <h1 className="web-title">Home Improvement Projects</h1> */}
        <NavLink end to="/">Home</NavLink>
        <NavLink end to="/projects/new" id='button'>＋ New Project</NavLink>
      </nav>
  );
}

export default NavBar;