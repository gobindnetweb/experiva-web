import React from "react";
import { Card } from "antd";
import { Checkbox } from "antd";
const Airlines = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <div className="ml-48">
        <Card className="max-w-xs">
          <div className="px-4">
            <h2 className="font-semibold ">PREFERRED AIRLINES</h2>
            <div class=" ">
              <div className="font-normal cursor-pointer text-base ">
                <p className="mb-2">
                  <Checkbox onChange={onChange}>AIR ASIA INDIA</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>VISTA</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>GO AIR</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>INDIGO</Checkbox>
                </p>
                <p className="mb-2">
                  <Checkbox onChange={onChange}>AIR INDIA</Checkbox>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Airlines;
