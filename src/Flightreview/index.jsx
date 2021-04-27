import React from "react";
import styles from "./flightrev.module.css";
import Flightselect from "../Flightselect";
import Travellerdetail from "../Travellerdetail";
import Faresumm from "../Faresumm";
const Flightreview = () => {
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
            TRAVELLER DETAILS
          </h1>
          <div className="mt-72 ml-72">
            <Flightselect />
          </div>
        </div>
      </div>

      <div className="" style={{ display: "flex" }}>
        <div className="ml-20 mt-20" style={{ width: "70%" }}>
          <Travellerdetail />
        </div>

        <div className="" style={{ width: "20%" }}>
          <Faresumm />
        </div>
      </div>
    </>
  );
};
export default Flightreview;
