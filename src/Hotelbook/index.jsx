import React from "react";
import { Row, Col, Button } from "antd";
import hotel from "../assets/images/hotel.jpg";
import {
  TableOutlined,
  ForkOutlined,
  CheckOutlined,
  StarFilled,
} from "@ant-design/icons";
import hotel1 from "../assets/images/hotel1.jpg";

const HOTEL_DATA = [
  {
    logo: hotel,
    hotelName: "Ramada Amritsar",
    bazar: "Hall Bazar",
    distance: " 0.9 km from Golden Temple",
    pool: "Swimming Pool",
    house: "house keeping",
    rest: " Restaurent",
    option: "More Options:",
    breakfast: " Breakfast Included",
    amount: " ₹ 6,429",
    icon: <StarFilled />,
    star: <StarFilled />,
    icons: <StarFilled />,
    stars: <StarFilled />,
    shape: <StarFilled />,
  },

  {
    logo: hotel1,
    hotelName: "Hotel City Park",
    bazar: "Near Jallianwala Bagh",
    distance: " 0.5 km from Golden Temple",
    pool: "Parking",
    house: "house keeping",
    rest: " Multilingual staff",
    option: "More Options:",
    breakfast: " Breakfast Included",
    amount: " ₹ 7,715",
    icon: <StarFilled />,
    star: <StarFilled />,
    icons: <StarFilled />,
    shape: <StarFilled />,
    shapes: <StarFilled />,
  },

  {
    logo: hotel,
    hotelName: "Ramada Amritsar",
    bazar: "Hall Bazar",
    distance: " 0.9 km from Golden Temple",
    pool: "Swimming Pool",
    house: "house keeping",
    rest: " Restaurent",
    option: "More Options:",
    breakfast: " Breakfast Included",
    amount: " ₹ 6,429",
    icon: <StarFilled />,
    star: <StarFilled />,
    icons: <StarFilled />,
    stars: <StarFilled />,
    shape: <StarFilled />,
  },

  {
    logo: hotel1,
    hotelName: "Hotel City Park",
    bazar: "Near Jallianwala Bagh",
    distance: " 0.5 km from Golden Temple",
    pool: "Parking",
    house: "house keeping",
    rest: " Multilingual staff",
    option: "More Options:",
    breakfast: " Breakfast Included",
    amount: " ₹ 7,715",
    icon: <StarFilled />,
    star: <StarFilled />,
    icons: <StarFilled />,
    shape: <StarFilled />,
    shapes: <StarFilled />,
  },

  {
    logo: hotel,
    hotelName: "Ramada Amritsar",
    bazar: "Hall Bazar",
    distance: " 0.9 km from Golden Temple",
    pool: "Swimming Pool",
    house: "house keeping",
    rest: " Restaurent",
    option: "More Options:",
    breakfast: " Breakfast Included",
    amount: " ₹ 6,429",
    icon: <StarFilled />,
    star: <StarFilled />,
    icons: <StarFilled />,
    stars: <StarFilled />,
    shape: <StarFilled />,
  },

  {
    logo: hotel1,
    hotelName: "Hotel City Park",
    bazar: "Near Jallianwala Bagh",
    distance: " 0.5 km from Golden Temple",
    pool: "Parking",
    house: "house keeping",
    rest: " Multilingual staff",
    option: "More Options:",
    breakfast: " Breakfast Included",
    amount: " ₹ 7,715",
    icon: <StarFilled />,
    star: <StarFilled />,
    icons: <StarFilled />,
    shape: <StarFilled />,
    shapes: <StarFilled />,
  },
];

const Hotelbook = () => {
  return (
    <>
      <div className="shadow-xl border mt-4 ml-80 mr-80 mb-8">
        {HOTEL_DATA.map((hotel, index) => (
          <Row key={index}>
            <Col span={6}>
              <div className="m-4">
                <img
                  src={hotel.logo}
                  alt=""
                  className="m-4 rounded-md"
                  style={{ height: "160px", width: "160px" }}
                />
              </div>
            </Col>

            <Col span={12}>
              <div className="font-extrabold text-2xl mt-4">
                {hotel.hotelName}
                <span className="ml-4 text-yellow-400">{hotel.icon}</span>
                <span className=" text-yellow-400">{hotel.star}</span>
                <span className=" text-yellow-400">{hotel.icons}</span>
                <span className="text-yellow-400">{hotel.stars}</span>
                <span className="text-gray-200">{hotel.shape}</span>
                <span className="text-gray-200">{hotel.shapes}</span>
              </div>
              <div className="mt-2 text-light">{hotel.bazar}</div>
              <div> {hotel.distance}</div>
              <div className="mt-2">
                <span className="text-light">
                  <TableOutlined />
                </span>
                <span className="text-light ml-2 mt-8">{hotel.pool}</span>
                <span className="text-light ml-6">
                  <CheckOutlined />
                  <span className="text-light ml-2 ">{hotel.house}</span>
                </span>

                <span className="text-light ml-6">
                  <ForkOutlined />
                  <span className="text-light ml-2 "> {hotel.rest} </span>
                </span>
              </div>

              <div className="mt-2">
                <span className="mt-2 text-light">{hotel.option} </span>
                <span className="ml-2 font-semibold text-green-600">
                  {hotel.breakfast}
                </span>
              </div>
            </Col>
            <Col span={6}>
              <div className=" ml-8 mt-2 ">
                <span className="w-20 text-right font-extrabold text-2xl font-extrabold ml-24 mr-16 ">
                  {hotel.amount}
                </span>
              </div>
              <div className="ml-36 font-semibold text-light">Per night</div>
              <div className="mt-4 ml-32">
                <Button type="primary ">Book Now</Button>
              </div>
              <div className="ml-2 mt-4 font-semibold text-xs text-green-600 ml-36">
                Get Details i
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
};
export default Hotelbook;
