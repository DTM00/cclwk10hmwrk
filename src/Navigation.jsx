import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>

        {/* <li>
                    <Link to="/about">About</Link>
                </li>  */}
      </ul>
    </nav>
  );
}

export default Navigation;
