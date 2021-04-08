import React, { useRef } from "react";
import { Button, Input, Row, Col } from "antd";
import FormLabel from "../../FormLabel";
import { DatePicker } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import AirportAutoComplete from "../../AirportAutoComplete";
import { useHistory } from "react-router-dom";

const Multicity = ({ openChooseTraveller }) => {
  const openTravellerRef = useRef();
  const history = useHistory();
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

      <Col span={24} className="my-2">
        <div className="flex items-center text-red-600 cursor-pointer">
          <span className="mr-2 flex items-center justify-center">
            <PlusCircleOutlined />
          </span>
          <span className="text-sm font-semibold flex items-center justify-center">
            Add City
          </span>
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
