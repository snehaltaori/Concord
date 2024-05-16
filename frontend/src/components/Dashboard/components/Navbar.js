import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar font-poppins">
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="logo">
            <span className="nav-logo">Concord.</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            <i className="fas fa-home" />
            <span className="nav-item">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            <i className="fas fa-user" />
            <span className="nav-item">Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" activeClassName="active">
            <i className="fas fa-calendar" />
            <span className="nav-item">Calendar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/clubs" activeClassName="active">
            <i className="fas fa-house" />
            <span className="nav-item">Clubs</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" activeClassName="active">
            <i className="fas fa-tasks" />
            <span className="nav-item">Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/forum" activeClassName="active">
            <i className="fas fa-message" />
            <span className="nav-item">Forum</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/meetings" activeClassName="active">
            <i className="fas fa-video" />
            <span className="nav-item">Meetings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            <i className="fas fa-cog" />
            <span className="nav-item">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="active">
            <i className="fas fa-question-circle" />
            <span className="nav-item">Help</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="logout">
            <i className="fas fa-sign-out-alt" />
            <span className="nav-item">Log out</span>
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
