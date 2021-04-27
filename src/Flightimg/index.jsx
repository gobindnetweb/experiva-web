import React from "react";
import styles from "./flight.module.css";
import Flightcard from "../Flightcard";
import Flightsidebars from "../Filtersidebars";
import Flightsuggestion from "../Flightsuggestion";

const Flightimg = () => {
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
            width: "95%",
          }}
        >
          <h1 className="font-semibold text-2xl ml-40 mb-12 tracking-widest">
            FLIGHTS BOOKING
          </h1>
          <div className=" ">
            <Flightcard />
          </div>
        </div>
      </div>
      <div className="" style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <Flightsidebars />
        </div>

        <div className="" style={{ width: "100%" }}>
          <Flightsuggestion />
        </div>
      </div>
    </>
  );
};
export default Flightimg;
