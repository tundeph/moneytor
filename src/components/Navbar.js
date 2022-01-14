import { NavLink } from "react-router-dom";

//styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <NavLink to="/"> Moneytor </NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login </NavLink>
        </li>
        <li>
          <NavLink to="/signup"> Signup </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
