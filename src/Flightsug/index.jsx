import React from "react";
import { Row, Col } from "antd";
import download1 from "../assets/images/download1.png";
import download2 from "../assets/images/download2.png";
import { Button } from "antd";

const Flightsug = () => {
  return (
    <>
      <div className="shadow-xl border mt-4 ml-28 mr-28 mb-8">
        <Row>
          <Col span={6}>
            <div className="mt-12">
              <img
                src={download1}
                alt=""
                className="mt-8"
                style={{ height: "60px" }}
              />
            </div>
          </Col>

          <Col span={6}>
            <div className="font-semibold mt-4"> Air India </div>
            <div className=" font-thin text-light mb-4"> 15 - 553</div>

            <div className="font-extrabold text-xl">11.50</div>
            <div className="font-medium text-light">Chandigarh</div>
            <div className=" font-thin text-light mb-4">(IXC)</div>
          </Col>
          <Col span={6}>
            <div className="mt-4"> Fare rules</div>
            <div className="text-green-500 mb-4"> Refundable</div>
            <div className="font-extrabold text-xl">06:22</div>
            <div className="font-medium text-light">Amritsar</div>
            <div className=" font-thin text-light">(ATQ)</div>
          </Col>
          <Col span={6}>
            <div className="font-black text-xl ml-2 mt-4">1,575</div>
            <div className="mt-2">
              <Button type="primary">Book Now</Button>
            </div>
            <div className="text-red-700 ml-2 font-extralight mt-2">
              Flight Details i
            </div>
          </Col>
        </Row>
      </div>

      <div className="shadow-xl border mt-4 ml-28 mr-28 mb-8">
        <Row>
          <Col span={6}>
            <div className="mt-12">
              <img
                src={download2}
                alt=""
                className="mt-8"
                style={{ height: "60px" }}
              />
            </div>
          </Col>

          <Col span={6}>
            <div className="font-semibold mt-4"> Vistara </div>
            <div className=" font-thin text-light mb-4"> 15 - 553</div>

            <div className="font-extrabold text-xl">11.50</div>
            <div className="font-medium text-light">Chandigarh</div>
            <div className=" font-thin text-light mb-4">(IXC)</div>
          </Col>
          <Col span={6}>
            <div className="mt-4"> Fare rules</div>
            <div className="text-green-500 mb-4"> Refundable</div>
            <div className="font-extrabold text-xl">06:22</div>
            <div className="font-medium text-light">Amritsar</div>
            <div className=" font-thin text-light">(ATQ)</div>
          </Col>
          <Col span={6}>
            <div className="font-black text-xl ml-2 mt-4">1,575</div>
            <div className="mt-2">
              <Button type="primary">Book Now</Button>
            </div>
            <div className="text-red-700 ml-2 font-extralight mt-2">
              Flight Details i
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Flightsug;
