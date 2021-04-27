import React from "react";
import { Card } from "antd";
import { Checkbox } from "antd";

const Filters = () => {
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

            <h2 className="font-semibold">DEPARTURE FROM CHANDIGARH</h2>

            <div className="text-lg cursor-pointer">
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <span className="font-medium">(11:00-12:00)</span> Morning
                </Checkbox>
              </p>
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <span className="font-medium">(11:00-16:00)</span> Afternoon
                </Checkbox>
              </p>
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <span className="font-medium">(16:00-21:00)</span> Evening
                </Checkbox>
              </p>
              <p className="mb-4">
                <Checkbox onChange={onChange}>
                  <span className="font-medium">(21:00-12:00)</span> Night
                </Checkbox>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Filters;
