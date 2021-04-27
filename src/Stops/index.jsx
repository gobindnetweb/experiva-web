import React from "react";
import { Card } from "antd";
import { Checkbox } from "antd";
const Stops = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <div className="ml-48">
        <Card className="max-w-xs">
          <div className="px-4">
            <h2 className="font-semibold ">STOPS</h2>
            <div class=" ">
              <div className="font-normal cursor-pointer text-base ">
                <p className="mb-2">
                  <Checkbox onChange={onChange}>DIRECT</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>1 STOP</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>2+ STOPS</Checkbox>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Stops;
