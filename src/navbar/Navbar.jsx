import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <>
      <nav>
        <div className={styles.img} onClick={() => history.push("/")}></div>

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
          <NavLink className={styles.logo} to="/login">
            Login/Sign up
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
