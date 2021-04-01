import React, { useState } from "react";
import {
  SendOutlined,
  InsertRowRightOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import CustomTab from "./CustomTab";
import { Button, Row, Col } from "antd";
import OneWay from "../components/Flight/OneWay";
import RoundTrip from "../components/Flight/RoundTrip";
import Multicity from "../components/Flight/Multicity";
import ChooseTravellerModal from "./components/ChooseTravellerModal";
import Hotel from "../Hotel";

const TABS = [
  {
    key: "flight",
    name: "Flight",
    icon: <SendOutlined rotate="-90" />,
  },
  {
    key: "hotels",
    name: "Hotels",
    icon: <InsertRowRightOutlined />,
  },
  {
    key: "packages",
    name: "Packages",
    icon: <ShoppingOutlined />,
  },
];

const Card = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripIndex, setTripIndex] = useState(0);
  const [
    chooseTravellerModalVisible,
    setChooseTravellerModalVisible,
  ] = useState(false);

  const [traveller, setTraveller] = useState({
    adults: 0,
    childrenAge: 0,
    infantAge: 0,
  });

  const renderTripChoice = () => {
    switch (tripIndex) {
      case 0:
        return (
          <OneWay
            openChooseTraveller={() => setChooseTravellerModalVisible(true)}
          />
        );

      case 1:
        return (
          <RoundTrip
            openChooseTraveller={() => setChooseTravellerModalVisible(true)}
          />
        );

      case 2:
        return (
          <Multicity
            openChooseTraveller={() => setChooseTravellerModalVisible(true)}
          />
        );

      default:
        return (
          <OneWay
            openChooseTraveller={() => setChooseTravellerModalVisible(true)}
          />
        );
    }
  };

  const flightTabContents = () => (
    <>
      <Row gutter={12}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Button
            danger={tripIndex === 0}
            shape="round"
            onClick={() => setTripIndex(0)}
            className="w-full"
          >
            <span
              className={`font-semibold ${
                tripIndex === 0 ? "text-#ff5722-600" : "text-gray-400"
              } `}
            >
              One Way
            </span>
          </Button>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Button
            danger={tripIndex === 1}
            shape="round"
            onClick={() => setTripIndex(1)}
            className="w-full"
          >
            <span
              className={`font-semibold ${
                tripIndex === 1 ? "text-#ff5722" : "text-gray-400"
              } `}
            >
              Round Trip
            </span>
          </Button>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Button
            danger={tripIndex === 2}
            shape="round"
            onClick={() => setTripIndex(2)}
            className="w-full"
          >
            <span
              className={`font-semibold ${
                tripIndex === 2 ? "text-#ff5722-600" : "text-gray-400"
              } `}
            >
              Multi City
            </span>
          </Button>
        </Col>
      </Row>
      {renderTripChoice()}
    </>
  );

  const renderTabContents = () => {
    switch (activeTab) {
      case "flight":
        return flightTabContents();

      case "hotels":
        return <Hotel />;

      case "packages":
        return <p>Need to add this view</p>;

      default:
        return null;
    }
  };

  return (
    <form className="m-0 p-5 bg-white w-ful shadow rounded-lg max-w-xl">
      <CustomTab
        tabs={TABS}
        activeKey={activeTab}
        onChange={(tabKey) => setActiveTab(tabKey)}
      >
        {renderTabContents()}
      </CustomTab>
      <ChooseTravellerModal
        visible={chooseTravellerModalVisible}
        setVisible={(open) => setChooseTravellerModalVisible(open)}
        traveller={traveller}
        setTraveller={(key, value) => {
          if (value >= 0) {
            setTraveller((prevState) => ({
              ...prevState,
              [key]: value,
            }));
          }
        }}
      />
    </form>
  );
};
export default Card;
