import React, { useRef } from "react";
import { Button, Input, Row, Col, DatePicker } from "antd";
import FormLabel from "../../FormLabel";
import AirportAutoComplete from "../../AirportAutoComplete";

const OneWay = ({ openChooseTraveller }) => {
  const openTravellerRef = useRef();
  return (
    <Row>
      <Col span={24} className="my-2">
        <FormLabel>From</FormLabel>

        <AirportAutoComplete />
      </Col>

      <Col span={24} className="my-2">
        <FormLabel>To</FormLabel>
        <AirportAutoComplete />
      </Col>

      <Col span={24} className="my-2">
        <FormLabel>Depature Date</FormLabel>
        <DatePicker size="large" className="w-full" />
      </Col>

      <Col span={24} className="my-2">
        <FormLabel>Choose Travellers</FormLabel>
        <Input
          ref={openTravellerRef}
          size="large"
          type="text"
          placeholder=" 1 Travellers, Economy"
          onFocus={() => {
            openTravellerRef.current.blur();
            openChooseTraveller();
          }}
        />
      </Col>

      <Col span={24} className="my-3">
        <Button type="primary" shape="round" size="large" block>
          Search Flight
        </Button>
      </Col>
    </Row>
  );
};
export default OneWay;
