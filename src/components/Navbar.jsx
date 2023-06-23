import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { links } from "../data";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`nav__menu ${showMenu && "show__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li key={index} className="nav__item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active__nav" : "nav__link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`nav__toggle ${showMenu && "animate__toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
