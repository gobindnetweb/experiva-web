import React from "react";
import { Card } from "antd";

import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const Faresumm = () => {
  return (
    <>
      <div className="ml-4">
        <Card className="max-w-xs">
          <div className="font-bold">
            <span className="text-lg mr-4">
              <MinusCircleOutlined />
            </span>
            Base Fare
          </div>
          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div> Adult(s) (1 X ₹ 1,085)</div>
            <div className="w-16 text-right font-bold mr-2"> ₹ 1,085</div>
          </div>
        </Card>

        <Card className="max-w-xs">
          <div className="font-semibold">
            <span className="text-md mr-2 ">
              <PlusCircleOutlined />
            </span>
            Fee & surcharges
            <span className=" text-light ml-16 font-bold">₹ 1,254</span>
          </div>
        </Card>

        <Card className="max-w-xs">
          <div className="font-semibold">
            <span className="text-md mr-2 ">
              <PlusCircleOutlined />
            </span>
            Other Services
            <span className=" text-light ml-20 font-bold">₹ 254</span>
          </div>
        </Card>

        <Card className="max-w-xs">
          <div className="font-extrabold text-xl mt-2 flex justify-between">
            <div> Total Amount </div>
            <div className="w-20 text-right font-extrabold mr-2">₹ 3664</div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Faresumm;
