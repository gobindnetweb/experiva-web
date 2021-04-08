import React from "react";
import { Row, Col } from "antd";
import { Checkbox } from "antd";
const Flightreturn = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <div className="ml-24 mr-24 text-xs">
        <Row>
          <Col span={4}>
            <div className="ml-8">
              <div className="font-bold mb-2" style={{ color: "#ff5722" }}>
                DEPARTURE FROM DELHI DEL
              </div>
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <div className=" text-xs">
                    <span className="font-bold">(00:01-11:59)</span> Morning
                  </div>
                </Checkbox>
              </p>

              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <div className=" text-xs">
                    <span className="font-bold">(12:00-15:59)</span> Afternoon
                  </div>
                </Checkbox>
              </p>
            </div>
          </Col>

          <Col span={4}>
            <div className="ml-4">
              <div className="font-bold mb-2 " style={{ color: "#ff5722" }}>
                DEPARTURE FROM MUMBAI BOM
              </div>
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <div className=" text-xs">
                    <span className="font-bold">(00:01-11:59)</span> Morning
                  </div>
                </Checkbox>
              </p>

              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <div className=" text-xs">
                    <span className="font-bold">(12:00-15:59)</span> Afternoon
                  </div>
                </Checkbox>
              </p>
            </div>
          </Col>

          <Col span={4}>
            <div className="ml-16">
              <div className="font-bold mb-2 ml-8" style={{ color: "#ff5722" }}>
                SECURITY
              </div>
              <p className="mb-2">
                <div className="ml-8">
                  <Checkbox onChange={onChange}>
                    <span className="text-xs">Refundable </span>
                  </Checkbox>
                </div>
              </p>
              <p className="mb-2">
                <div className=" ml-8">
                  <Checkbox onChange={onChange}>
                    <span className="text-xs">Non Refundable </span>
                  </Checkbox>
                </div>
              </p>
            </div>
          </Col>

          <Col span={4}>
            <div className="ml-16">
              <div className="font-bold mb-2" style={{ color: "#ff5722" }}>
                STOPS
              </div>
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <span className="text-xs">Direct</span>
                </Checkbox>
              </p>
              <p className="mb-2">
                <Checkbox onChange={onChange}>
                  <span className="text-xs">1 Stop </span>
                </Checkbox>
              </p>
            </div>
          </Col>

          <Col span={4}>
            <div className="ml-4">
              <div className="font-bold" style={{ color: "#ff5722" }}>
                PREFERRED AIRLINES
              </div>
            </div>
          </Col>

          <Col span={4}>
            <div className="ml-4">
              <div className="font-bold" style={{ color: "#ff5722" }}>
                MORE FILTERS
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Flightreturn;
