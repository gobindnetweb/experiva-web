import React from "react";
import { Card } from "antd";

import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
const Charges = () => {
  return (
    <>
      <div className="ml-4">
        <Card className="max-w-sm">
          <div className="font-bold">
            <span className="text-lg mr-4">
              <MinusCircleOutlined />
            </span>
            Base Fare
          </div>

          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div> Adult(s) (1 X ₹ 1,085)</div>
            <div className="w-16 text-right font-bold"> ₹ 1,085</div>
          </div>
        </Card>

        <Card className="max-w-sm">
          <div className="font-bold">
            <span className="text-lg mr-4">
              <MinusCircleOutlined />
            </span>
            Fee & Surcharges
          </div>
          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div>Regional Connectivity Fund</div>
            <div className="w-16 text-right font-bold">₹ 1,70</div>
          </div>

          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div className="flex-wrap">Goods & Services Tax</div>
            <div className="w-16 text-right font-bold">₹ 1,09</div>
          </div>

          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div>Passenger Service Fee</div>
            <div className="w-16 text-right font-bold">₹ 2,68</div>
          </div>

          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div>Airline Fuel Charge</div>
            <div className="w-16 text-right font-bold">₹ 5,20</div>
          </div>

          <div className="font-bold text-light ml-8 mt-2 flex justify-between">
            <div>Airline Total fee & surcharges</div>
            <div className="w-16 text-right font-bold">₹ 1,253</div>
          </div>

          <div className="font-medium text-light ml-8 mt-2 flex justify-between">
            <div> Service Fee </div>
            <div className="w-16 text-right font-bold">₹ 5</div>
          </div>
        </Card>
        <Card className="max-w-sm">
          <div className="font-bold">
            <span className="text-lg mr-4">
              <PlusCircleOutlined />
            </span>
            Other Services
            <span className="ml-40  text-light  font-bold">₹ 254</span>
          </div>
        </Card>

        <Card className="max-w-sm">
          <div className="font-extrabold text-xl ml-8 mt-2 flex justify-between">
            <div> Total Amount </div>
            <div className="w-20 text-right font-extrabold">₹ 3664</div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Charges;
