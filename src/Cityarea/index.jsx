import React from "react";
import { Card, Button } from "antd";
import { Row, Col } from "antd";
import { EditOutlined } from "@ant-design/icons";
const Cityarea = () => {
  return (
    <>
      <div className="ml-20">
        <Card className="max-w-5xl ">
          <Row>
            <Col span={4}>
              <div className=" font-medium text-sm text-light">
                City Area or Hotel
              </div>
              <div className="font-bold text-xl">Amritsar</div>
            </Col>

            <Col span={5}>
              <div className=" font-medium text-sm text-light">Check-in</div>
              <div className="font-semiold text-xl">Sat, 14 sep 2019</div>
            </Col>

            <Col span={5}>
              <div className=" font-medium text-sm text-light">Check-out</div>
              <div className="font-semiold text-xl">Mon, 16 sep 2019</div>
            </Col>

            <Col span={5}>
              <div className=" font-medium text-sm text-light">
                Rooms & Guests
              </div>
              <div className="font-semiold text-xl">02 Room 02 Adults</div>
            </Col>

            <Button
              size="large"
              className="ml-8"
              style={{ backgroundColor: "#ff5722", color: "white", width: 170 }}
            >
              <EditOutlined />
              Modify
            </Button>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Cityarea;
