import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.img}></div>
        <div className={styles.menu}>
          <NavLink exact activeClassName={styles.activeClass} to="/">
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName={styles.activeClass}
            to="/flight-search"
          >
            Flights
          </NavLink>
          <NavLink to="#">Hotels</NavLink>
          <NavLink to="#">Blogs</NavLink>
          <NavLink to="#" className={styles.active}>
            Services
          </NavLink>
          <a className={styles.logo} href="#">
            Login/Sign up
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
