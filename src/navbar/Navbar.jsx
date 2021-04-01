import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.img}></div>
        <div className={styles.menu}>
          <a href="#">Home</a>
          <a href="#">Flights</a>
          <a href="#">Hotels</a>
          <a href="#">Blogs</a>
          <a href="#" className={styles.active}>
            Services
          </a>
          <a className={styles.logo} href="#">
            Login/Sign up
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
