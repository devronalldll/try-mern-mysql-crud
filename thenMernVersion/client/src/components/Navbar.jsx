import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <h2>Navbar React MySQL</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
        {/* <li>
          <Link to="/api">Api</Link>
        </li> */}
      </ul>
    </div>
  );
}
export default Navbar;
