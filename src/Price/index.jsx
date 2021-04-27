import React from "react";
import { Card } from "antd";
import { Slider } from "antd";

function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(value) {
  console.log("onAfterChange: ", value);
}
const Price = () => {
  return (
    <>
      <div className="ml-48">
        <Card className="max-w-xs">
          <div className="px-4">
            <h2 className="font-semibold ">PRICE</h2>
            <Slider
              range
              step={10}
              defaultValue={[0, 100]}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
            <p className="mb-2 text-sm">PRICE ₹1200 - ₹ 5567</p>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Price;
