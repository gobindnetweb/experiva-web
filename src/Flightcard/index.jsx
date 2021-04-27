import React from "react";
import { Row, Col } from "antd";
import { EditOutlined, SwapOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
const Flightcard = () => {
  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <Card className="w-2/3">
          <Row>
            <Col span={2}>
              <div className="bg-gray-100">
                <div className="text-xs font-bold ml-2">TRIP TYPE</div>
                <div className="font-bold ml-2" style={{ color: "#ff5722" }}>
                  One way
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className="text-xs mt-2 text-light">From </div>
              <div className="font-bold text-md ">Chandigarh</div>
              <div className="text-xs text-light">IXC </div>
            </Col>
            <Col span={2}>
              <div
                className="font-bold text-5xl"
                size="large"
                style={{ width: 150 }}
              ></div>
              <SwapOutlined className="mt-8 text-lg" />
            </Col>
            <Col span={3}>
              <div className="text-xs mt-2 text-light">To</div>
              <div className="font-bold text-md ">Amritsar</div>
              <div className="text-xs text-light">ATQ </div>
            </Col>
            <Col span={4}>
              <div className="text-xs mt-2 text-light">Depature</div>
              <div className="font-semibold text-md ">
                <span className="font-bold text-lg">14</span> sept,2019
              </div>
            </Col>
            <Col span={4}>
              <div className="text-xs mt-2 text-light">Return</div>
              <div className="font-semibold text-md ">
                <span className="font-bold text-lg">16</span> sept,2019
              </div>
            </Col>
            <Col span={4}>
              <div className="text-xs mt-2 text-light">Adult</div>
              <div className="font-semibold text-xs  ">
                <span className="font-bold text-lg "> 2 </span>
                (18+)
              </div>
              <div>
                <span className="text-light"> class </span>
                <span className="font-semibold ml-2"> Economy </span>
              </div>
            </Col>

            <Col span={4}>
              <div className=" resize-y text-xs ml-2">
                <Button
                  className="bg-red-500"
                  style={{
                    width: 150,
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  <EditOutlined /> Modify
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Flightcard;
