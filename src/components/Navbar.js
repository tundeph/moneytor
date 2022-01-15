import { NavLink, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//styles
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <Link to="/"> Moneytor </Link>
        </li>
        {!user ? (
          <>
            <li>
              <NavLink to="/login"> Login </NavLink>
            </li>
            <li>
              <NavLink to="/signup"> Signup </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>Hello, {user.displayName} </li>
            <li>
              <button className="btn" onClick={logout}>
                Log out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
