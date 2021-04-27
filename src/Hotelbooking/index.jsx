import React from "react";
import styles from "./booking.module.css";
const Hotelbooking = () => {
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
          <h1 className="font-semibold text-2xl ml-40 mt-20 tracking-widest">
            HOTEL BOOKING DETAILS
          </h1>
          <div className=" "></div>
        </div>
      </div>
    </>
  );
};
export default Hotelbooking;
