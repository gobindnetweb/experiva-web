import React from "react";
import { Card } from "antd";
import { Checkbox } from "antd";
const Flightsidebar = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <div className="ml-48">
        <Card className="max-w-xs">
          <div className="px-4">
            <h1 className="font-semibold text-xl border-b-4 border-red-500">
              Filters
            </h1>

            <h2 className="font-bold" style={{ color: "#ff5722" }}>
              DEPARTURE FROM DELHI DEL
            </h2>

            <div class="border-b-2 border-red-500 mb-2">
              <div className="text-lg cursor-pointer">
                <p className="mb-2">
                  <Checkbox onChange={onChange}>
                    <span className="font-medium">(00:01-11:59)</span> Morning
                  </Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>
                    <span className="font-medium">(12:00-15:59)</span> Afternoon
                  </Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>
                    <span className="font-medium">(16:00-20:59)</span> Evening
                  </Checkbox>
                </p>
                <p className="mb-4">
                  <Checkbox onChange={onChange}>
                    <span className="font-medium">(21:00-24:00)</span> Night
                  </Checkbox>
                </p>
              </div>
            </div>
            <h2
              className="font-bold "
              style={{ color: "#ff5722", backgroundColor: "red" }}
            >
              SECURITY
            </h2>
            <div class="border-b-2 border-red-500 mb-2">
              <div className="font-normal cursor-pointer text-base ">
                <p className="mb-2">
                  <Checkbox onChange={onChange}>Refundable</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>Non Refundable</Checkbox>
                </p>
              </div>
            </div>

            <h2 className="font-bold" style={{ color: "#ff5722" }}>
              STOPS
            </h2>

            <div class="border-b-2 border-red-500 mb-2">
              <div className="font-normal cursor-pointer text-base ">
                <p className="mb-2">
                  <Checkbox onChange={onChange}>Direct</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>1 Stop</Checkbox>
                </p>

                <p className="mb-2">
                  <Checkbox onChange={onChange}>2+ Stops</Checkbox>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Flightsidebar;
