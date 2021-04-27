import React from "react";
import { Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";

const Doubleroom = () => {
  return (
    <>
      <div className="ml-20 mt-4">
        <Card className="max-w-md ">
          <div className="font-semibold text-lg"> Standard Double Room</div>
          <Row>
            <Col span={18}>
              <div className="text-red-500">
                <span className="text-green-500 mr-2">
                  <CheckOutlined />
                </span>
                Non Refundable
              </div>
            </Col>
            <Col span={6}>
              <div className="font-extrabold text-xl"> INR 6,429</div>
            </Col>
          </Row>
          <Row>
            <Col span={20}>
              <div className="text-green-500">
                <span className="text-green-500 mr-2">
                  <CheckOutlined />
                </span>
                Room Only
              </div>
            </Col>

            <Col span={4}>
              <div className="font-semibold text-light"> per night</div>
            </Col>
          </Row>

          <Row>
            <Col span={16}>
              <div></div>
            </Col>
            <Col span={8}>
              <Button
                size="medium"
                className="mt-4"
                style={{
                  backgroundColor: "#ff5722",
                  color: "white",
                  width: 120,
                }}
              >
                Book this now
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Doubleroom;
