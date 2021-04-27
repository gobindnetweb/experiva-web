import React from "react";
import { Row, Col } from "antd";
import download from "../assets/images/download.png";
import jet from "../assets/images/jet.jpg";
import { Button } from "antd";
import indi from "../assets/images/indi.jpg";

const FLIGHT_DATA = [
  {
    logo: download,
    flightName: "Air Asia",
    flightNumber: "15 - 553",
    rules: "Fare rules",
    fareType: "Refundable",
    flightTime: "01 hr 10 mins",
    startTime: "11.50",
    from: "Chandigarh",
    flightCode: "(IXC)",
    endTime: "06:22",
    to: "Amritsar",
    flighttoCode: "(ATQ)",
    flightCost: "₹1,575",
  },
  {
    logo: jet,
    flightName: "Jet Airways",
    flightNumber: "15 - 553",
    rules: "Fare rules",
    fareType: "Refundable",
    flightTime: "02 hr 21 mins",
    startTime: "5:40",
    from: "Chandigarh",
    flightfromCode: "(IXC)",
    endTime: "03:51",
    flighttoCode: "(ATQ)",
    to: "Amritsar",
    flightCost: "₹1,575",
  },

  {
    logo: indi,
    flightName: "Jet Airways",
    flightNumber: "15 - 553",
    rules: "Fare rules",
    fareType: "Refundable",
    flightTime: "02 hr 21 mins",
    startTime: "9:32",
    from: "Chandigarh",
    flightfromCode: "(IXC)",
    endTime: "12:46",
    flighttoCode: "(ATQ)",
    to: "Amritsar",
    flightCost: "₹1,575",
  },

  {
    logo: download,
    flightName: "Air Asia",
    flightNumber: "15 - 553",
    rules: "Fare rules",
    fareType: "Refundable",
    flightTime: "01 hr 10 mins",
    startTime: "11.50",
    from: "Chandigarh",
    flightCode: "(IXC)",
    endTime: "06:22",
    to: "Amritsar",
    flighttoCode: "(ATQ)",
    flightCost: "₹1,575",
  },
  {
    logo: jet,
    flightName: "Jet Airways",
    flightNumber: "15 - 553",
    rules: "Fare rules",
    fareType: "Refundable",
    flightTime: "02 hr 21 mins",
    startTime: "5:40",
    from: "Chandigarh",
    flightfromCode: "(IXC)",
    endTime: "03:51",
    flighttoCode: "(ATQ)",
    to: "Amritsar",
    flightCost: "₹1,575",
  },

  {
    logo: indi,
    flightName: "Jet Airways",
    flightNumber: "15 - 553",
    rules: "Fare rules",
    fareType: "Refundable",
    flightTime: "02 hr 21 mins",
    startTime: "9:32",
    from: "Chandigarh",
    flightfromCode: "(IXC)",
    endTime: "12:46",
    flighttoCode: "(ATQ)",
    to: "Amritsar",
    flightCost: "₹1,575",
  },
];

const FlightSuggestion = () => {
  return (
    <div className="shadow-xl border mt-4 ml-40 mr-40 mb-8">
      {FLIGHT_DATA.map((flight, index) => (
        <Row key={index}>
          <Col span={8}>
            <div className="mt-12 ml-28">
              <img
                src={flight.logo}
                alt=""
                className="mt-8"
                style={{ height: "60px" }}
              />
            </div>
          </Col>

          <Col span={8}>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold mt-4"> {flight.flightName} </div>
                <div className=" font-thin text-light mb-4">
                  {flight.flightNumber}
                </div>
              </div>
              <div>
                <div className="mt-4"> Fare rules</div>
                <div className="text-green-500 mb-4">{flight.flightNumber}</div>
              </div>
            </div>
            <div className="text-center">{flight.flightTime}</div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-extrabold text-xl">{flight.startTime}</div>
                <div className="font-medium text-light">{flight.from}</div>
                <div className=" font-thin text-light mb-4">
                  {flight.flightfromCode}
                </div>
              </div>
              <div className="">
                <div className="font-extrabold text-xl">{flight.endTime}</div>
                <div className="font-medium text-light">{flight.to}</div>
                <div className=" font-thin text-light">
                  {flight.flighttoCode}
                </div>
              </div>
            </div>
          </Col>

          <Col span={8}>
            <div className="mr-20">
              <div className=" flex justify-end font-black text-2xl mt-8">
                {flight.flightCost}
              </div>
              <div className="mt-4 flex justify-end">
                <Button type="primary">Book Now</Button>
              </div>
              <div className=" flex justify-end text-red-700 ml-2 font-extralight mt-4">
                Flight Details i
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default FlightSuggestion;
