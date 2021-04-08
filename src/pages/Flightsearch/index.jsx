import React, { useState } from "react";
import Flightheader from "../../components/Flightheader";
import Flightsidebar from "../../components/flightsidebar";
import ChooseTravellerModal from "../../cards/components/ChooseTravellerModal";
import Flightreturn from "../../components/Flightreturn";
import { Row, Col } from "antd";

const Flightsearch = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("oneway");
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
    switch (tripType) {
      case "oneway":
        return <Flightsidebar />;

      case "return":
        return <Flightreturn />;

      default:
        return <Flightsidebar />;
    }
  };

  const flightTabContents = () => (
    <>
      <Row>
        <Flightheader
          tripType={tripType}
          changeTripType={(value) => setTripType(value)}
          openChooseTraveller={() => setChooseTravellerModalVisible(true)}
        />
      </Row>
      {renderTripChoice()}
    </>
  );

  const renderTabContents = () => {
    switch (activeTab) {
      case "flight":
        return flightTabContents();

      default:
        return null;
    }
  };

  return (
    <>
      {/*
      <Flightheader
        openChooseTraveller={() => setChooseTravellerModalVisible(true)}
      />
      
      <div className="container max-w-screen-xl mx-auto mt-0">
        <div className="flex">
          <Flightsidebar />
        </div>
      </div>
      */}

      {renderTabContents()}

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
    </>
  );
};
export default Flightsearch;
