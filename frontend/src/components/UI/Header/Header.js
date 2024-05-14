import { NavLink } from "react-router-dom";
import { useAuth } from "../../../security/AuthContext";
import "./Header.css";

export default function Header() {
  const authContext = useAuth();
  return (
    <div>
      <header className="header">
        <nav className="navheader">
          <div className="nav__logo">
            <a href="index.html">Concord.</a>
          </div>
          <ul className="nav__links" id="nav-links">
            <li className="link">
              <a href="#">Home</a>
            </li>
            <li className="link">
              <a href="#about">About</a>
            </li>
            <li className="link">
              <a href="#stats">Statistics</a>
            </li>
            <li className="link">
              <a href="">Pricing</a>
            </li>
            <li className="loginlink">
            {authContext.isAuthenticated ? (
                <a onClick={authContext.logout}>Logout</a>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
          <div className="nav__menu__btn" id="menu-btn">
            <span>
              <i className="ri-menu-line" />
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
}
