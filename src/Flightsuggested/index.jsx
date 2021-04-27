import React from "react";
import { Row, Col } from "antd";
import download from "../assets/images/download.png";
import download2 from "../assets/images/download2.png";

const FLIGHT_DATA = {
  departure: [
    {
      logo: download,
      flightName: "Air Asia",
      flightNumber: "15 - 553",
      startTime: "11.50",
      from: "Chandigarh",
      airportFrom: "  Chandigarh Airport",
      endTime: "01:00",
      to: "New Delhi",
      airportTo: "Indira gandhi airport terminal 3",
      bag: "BAGGAGE:",
      age: "Adult:",
      check: " CHECK - IN",
      weight: " 25Kg",
      cab: " CABIN",
      load: "8Kg",
    },
    {
      logo: download,
      flightName: "Air Asia",
      flightNumber: "15 - 553",
      startTime: "02:50",
      from: "New Delhi",
      airportFrom: "Indira gandhi airport terminal 3",
      endTime: "06:22",
      to: "Amritsar",
      airportTo: "Sri Guru Ram Dass Jee International Airport",
      bag: "BAGGAGE:",
      age: "Adult:",
      check: " CHECK - IN",
      weight: " 25Kg",
      cab: " CABIN",
      load: "8Kg",
    },
  ],
  return: [
    {
      logo: download2,
      flightName: "Vistara",
      flightNumber: "17 - 03",
      startTime: "23:20",
      from: "Amritsar",
      airportFrom: "Sri Guru Ram Dass Jee International Airport",
      endTime: "00:35",
      to: "New Delhi",
      airportTo: "Sri Guru Ram Dass Jee International Airport",
      bag: "BAGGAGE:",
      age: "Adult:",
      check: " CHECK - IN",
      weight: " 25Kg",
      cab: " CABIN",
      load: "8Kg",
    },
    {
      logo: download2,
      flightName: "Vistara",
      flightNumber: "17 - 03",
      startTime: "06:15",
      from: "New Delhi",
      airportFrom: "Indira gandhi airport terminal 3",
      endTime: "07:15",
      to: "Chandigarh",
      airportTo: "Chandigarh Airport",
      bag: "BAGGAGE:",
      age: "Adult:",
      check: " CHECK - IN",
      weight: " 25Kg",
      cab: " CABIN",
      load: "8Kg",
    },
  ],
};

const Flightsuggested = () => {
  return (
    <>
      <div className="shadow-xl border ml-80 mr-80 mb-0">
        <Row>
          <Col span={4}>
            <div
              className="font-medium m-4"
              style={{
                color: "#fff",
                backgroundImage: "linear-gradient(to right, black , grey)",
              }}
            >
              <span className="ml-4">DEPART</span>
              <div className="font-bold ml-4 "> SAT 14 SEP </div>
            </div>
          </Col>

          <Col span={10}>
            <div className="font-semibold text-lg ml-2 mt-4"> IXC - ATQ </div>
            <div className=" font-thin text-xs ml-2">
              1 stop | o1 hrs 10 mins | Economy
            </div>
          </Col>

          <Col span={8}>
            <div className="mt-6">
              <span className="text-green-500 font-semibold ml-24">
                Refundable
              </span>
              <span className="ml-2"> Fare rules </span>
            </div>
          </Col>
        </Row>
      </div>

      {FLIGHT_DATA.departure.map((flight, index) => (
        <div key={index}>
          <div className="shadow-xl border ml-80 mr-80 mb-0">
            <Row>
              <Col span={4}>
                <div className="mt-8 mb-8 ml-4">
                  <img
                    src={flight.logo}
                    alt=""
                    className="mb-8 mb-8 "
                    style={{ height: "60px" }}
                  />
                </div>
              </Col>

              <Col span={4}>
                <div className="font-bold mt-8"> {flight.flightName} </div>
                <div className=" font-thin text-light mb-8">
                  {flight.flightNumber}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-extrabold text-xl mt-8">
                  {flight.startTime}
                </div>
                <div className="font-medium text-light">{flight.from}</div>
                <div className=" font-thin text-light text-sm mb-8">
                  {flight.airportFrom}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-extrabold text-xl mt-8">
                  {flight.endTime}
                </div>
                <div className="font-medium text-light">{flight.to}</div>
                <div className=" font-thin text-light text-sm mb-8">
                  {flight.airportTo}
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <div className="font-semibold mt-12 px-72 "> {flight.bag}</div>

                <div className=" font-thin text-light mb-12 px-80">
                  {flight.age}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-semibold mt-12 px-40"> {flight.check}</div>
                <div className=" font-thin text-light mb-12 px-40">
                  {flight.weight}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-semibold mt-12 px-4"> {flight.cab} </div>
                <div className=" font-thin text-light mb-12 px-4">
                  {flight.load}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}

      <div className="shadow-xl border ml-80 mr-80 mt-20 mb-0">
        <Row>
          <Col span={4}>
            <div
              className="font-medium m-4"
              style={{
                color: "#fff",
                backgroundImage: "linear-gradient(to right, black , grey)",
              }}
            >
              <span className="ml-4">RETURN</span>
              <div className="font-bold ml-4 "> MON 16 SEP </div>
            </div>
          </Col>

          <Col span={10}>
            <div className="font-semibold text-lg ml-2 mt-4"> ATQ - IXC </div>
            <div className=" font-thin text-xs ml-2">
              1 stop | o1 hrs 10 mins | Economy
            </div>
          </Col>

          <Col span={8}>
            <div className="mt-6">
              <span className="text-green-500 font-semibold ml-24">
                Refundable
              </span>
              <span className="ml-2"> Fare rules </span>
            </div>
          </Col>
        </Row>
      </div>

      {FLIGHT_DATA.return.map((flight, index) => (
        <div key={index}>
          <div className="shadow-xl border ml-80 mr-80 mb-0">
            <Row>
              <Col span={4}>
                <div className="mt-8 mb-8 ml-4">
                  <img
                    src={flight.logo}
                    alt=""
                    className="mb-8 mb-8 "
                    style={{ height: "60px" }}
                  />
                </div>
              </Col>

              <Col span={4}>
                <div className="font-bold mt-8"> {flight.flightName} </div>
                <div className=" font-thin text-light mb-8">
                  {flight.flightNumber}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-extrabold text-xl mt-8">
                  {flight.startTime}
                </div>
                <div className="font-medium text-light">{flight.from}</div>
                <div className=" font-thin text-light text-sm mb-8">
                  {flight.airportFrom}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-extrabold text-xl mt-8">
                  {flight.endTime}
                </div>
                <div className="font-medium text-light">{flight.to}</div>
                <div className=" font-thin text-light text-sm mb-8">
                  {flight.airportTo}
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <div className="font-semibold mt-12 px-72 "> {flight.bag}</div>

                <div className=" font-thin text-light mb-12 px-80">
                  {flight.age}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-semibold mt-12 px-40"> {flight.check}</div>
                <div className=" font-thin text-light mb-12 px-40">
                  {flight.weight}
                </div>
              </Col>

              <Col span={8}>
                <div className="font-semibold mt-12 px-4"> {flight.cab} </div>
                <div className=" font-thin text-light mb-12 px-4">
                  {flight.load}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}
    </>
  );
};
export default Flightsuggested;
