import React from "react";
import { Row, Col, Card, Button } from "antd";
const Guestreviews = () => {
  return (
    <>
      <div className="ml-20 mt-4">
        <Card className="max-w-md ">
          <Row>
            <Col span={20}>
              <div className="font-bold text-xl text-light">
                What Guests Said
              </div>
              <div className="text-light">Based on 2803 Reviews</div>
            </Col>
            <Col span={4}>
              <Button
                size="medium"
                className=""
                style={{
                  backgroundColor: "green",
                  color: "white",
                  width: 50,
                }}
              >
                4.2
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Guestreviews;
