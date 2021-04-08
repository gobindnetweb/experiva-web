import React, { useRef } from "react";
import { Button, Input } from "antd";
import FormLabel from "../../FormLabel";
import { DatePicker } from "antd";
import { Row, Col } from "antd";
import AirportAutoComplete from "../../AirportAutoComplete";
import { useHistory } from "react-router-dom";

const RoundTrip = ({ openChooseTraveller }) => {
  const openTravellerRef = useRef();
  const history = useHistory();
  return (
    <>
      <Row>
        <Col span={24} className="my-2">
          <FormLabel>From</FormLabel>
          <AirportAutoComplete />
        </Col>

        <Col span={24} className="my-2">
          <FormLabel>To</FormLabel>
          <AirportAutoComplete />
        </Col>

        <Col span={12} className="pr-1 my-2">
          <FormLabel>Depature Date</FormLabel>
          <DatePicker size="large" className="w-full" />
        </Col>

        <Col span={12} className="pl-1 my-2">
          <FormLabel>Return Date</FormLabel>
          <DatePicker size="large" className="w-full" />
        </Col>

        <Col span={24} className="my-2">
          <FormLabel>Choose Travellers</FormLabel>
          <Input
            ref={openTravellerRef}
            size="large"
            type="text"
            placeholder=" 1 Travellers / 1 Child / Economy"
            onFocus={() => {
              openTravellerRef.current.blur();
              openChooseTraveller();
            }}
          />
        </Col>

        <Col span={24} className="my-3">
          <Button
            onClick={() => history.push("/flight-search")}
            type="primary"
            shape="round"
            size="large"
            block
          >
            Search Flight
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default RoundTrip;
