import React from "react";
import Card from "../cards/Card";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <div className={styles.img}></div>
        <div
          style={{
            position: "absolute",
            top: 128,
            left: 20,
            zIndex: 500,
          }}
        >
          <div className="ml-20">
            <Card />
          </div>
        </div>
        <div className="Allura">
          <div className={styles.text}>
            <h2
              className="font-semibold text-5xl tracking-widest mb-0 mr-20"
              style={{ color: "#fff" }}
            >
              Let's Discover the world
            </h2>
            <h1
              className="font-semibold text-9xl tracking-widest"
              style={{ color: "#fff" }}
            >
              Together!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
