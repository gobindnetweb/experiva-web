import React, { useState, useRef } from "react";
import { Button, Input, Row, Col } from "antd";
import FormLabel from "../../FormLabel";
import { DatePicker } from "antd";
import AirportAutoComplete from "../../AirportAutoComplete";
import { useHistory } from "react-router-dom";

const Multicity = ({ openChooseTraveller }) => {
  const openTravellerRef = useRef();
  const history = useHistory();

  const [count, setCount] = useState(0);

  const SetCity = () => {
    setCount(count + 1);
  };

  const DecCity = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      count(0);
    }
  };

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

      {[...new Array(count)].map((ec) => (
        <>
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
        </>
      ))}

      <Col span={24} className="my-2">
        <div className="flex items-center text-red-600 cursor-pointer">
          <Button type="text" onClick={SetCity}>
            <span className="text-sm  text-red-500 font-semibold flex items-center justify-center">
              Add City
            </span>
          </Button>

          {count > 0 ? (
            <Button type="text" onClick={DecCity}>
              <span className="text-sm text-red-500 font-semibold flex items-center justify-center">
                Remove City
              </span>
            </Button>
          ) : null}
        </div>
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
  );
};
export default Multicity;
