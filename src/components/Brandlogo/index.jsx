import React from "react";
import styles from "./brand.module.css";
import { BorderOutlined } from "@ant-design/icons";

const Brandlogo = () => {
  return (
    <div className="relative">
      <div>
        <div className={styles.img}></div>
      </div>

      <div className={styles.oleo}>
        <div className="oleoScript">
          <h3
            className="font-semibold md:text-4xl lg:text-7xl transform -rotate-3 mb-0"
            style={{ color: "#ff5722" }}
          >
            Expervia
          </h3>
          <div>
            <h1
              className="font-bold text-xl mx-36 transform -rotate-3"
              style={{ color: "#ff5722" }}
            >
              The finest travel
            </h1>
          </div>
        </div>
        <div className="openSansFont">
          <div className="flex items-center mb-5">
            <div className="flex items-center mr-3">
              <BorderOutlined
                className="flex items-center"
                style={{ background: "#ff5722" }}
              />
            </div>
            <div className="font-semibold text-lg text-black">
              Reserved Priority seats & Priority Boarding.
            </div>
          </div>

          <div className="flex items-center mb-5">
            <div className="flex items-center mr-3">
              <BorderOutlined
                className="flex items-center"
                style={{ background: "#ff5722" }}
              />
            </div>
            <div className="font-semibold text-lg text-black">
              Arrive on time
            </div>
          </div>

          <div className="flex items-center mb-5">
            <div className="flex items-center mr-3">
              <BorderOutlined
                className="flex items-center"
                style={{ background: "#ff5722" }}
              />
            </div>
            <div className="font-semibold text-lg text-black">
              Flexibility & Frequency
            </div>
          </div>

          <div className="flex items-center mb-5">
            <div className="flex items-center mr-3">
              <BorderOutlined
                className="flex items-center"
                style={{ background: "#ff5722" }}
              />
            </div>
            <div className="font-semibold text-lg text-black">
              Baggage Allowance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brandlogo;
