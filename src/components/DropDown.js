import { Link } from "react-router-dom";

function DropDown() {

  return (
      <div id="drop-down">
        <Link to="/edit">Edit</Link>
        <Link to='/projects'>Delete</Link>
      </div>
  );
}

export default DropDown;