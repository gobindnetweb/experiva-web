import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
const Flightselect = () => {
  return (
    <>
      <div className="ml-20">
        <Card className="max-w-3xl ">
          <Row>
            <Col span={6}>
              <div className="font-semibold border-b-4 border-green-500 text-green-500">
                <CheckCircleOutlined />
                <span className="ml-2">FLIGHT SELECTED </span>
              </div>
            </Col>
            <Col span={6}>
              <div className="font-semibold text-green-500 border-b-4 border-green-500">
                <CheckCircleOutlined /> <span className="ml-2">REVIEW </span>
              </div>
            </Col>
            <Col span={6}>
              <div className="font-semibold border-b-4 ">
                <span className="text-green-500 mr-2">
                  <CheckCircleOutlined />
                </span>
                TRAVELLER DETAILS
              </div>
            </Col>

            <Col span={6}>
              <div className="font-semibold  border-b-4 ">
                <span className="text-green-500 mr-2">
                  <CheckCircleOutlined />
                </span>
                MAKE PAYMENT
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Flightselect;
