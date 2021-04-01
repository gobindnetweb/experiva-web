import React, { useRef, useState } from "react";
import { Button, Input, Row, Col, DatePicker } from "antd";
import FormLabel from "./components/FormLabel";
import CityAutoComplete from "./components/CityAutoComplete";
import ChooseHotalsModal from "./component/ChooseHotalsModal";

const Hotel = () => {
  const [openChooseHotals, setOpenChooseHotels] = useState(false);
  const openHotalsRef = useRef();
  return (
    <>
      <Row>
        <Col span={24} className="my-2">
          <FormLabel>City</FormLabel>
          <CityAutoComplete />
        </Col>

        <Col span={12} className="pr-1 my-2">
          <FormLabel>Check In</FormLabel>
          <DatePicker size="large" className="w-full" />
        </Col>

        <Col span={12} className="pl-1 my-2">
          <FormLabel>Check Out</FormLabel>
          <DatePicker size="large" className="w-full" />
        </Col>

        <Col span={24} className="my-2">
          <FormLabel> Rooms & Adults</FormLabel>
          <Input
            ref={openHotalsRef}
            size="large"
            type="text"
            placeholder=" Rooms & Adults"
            onFocus={() => {
              openHotalsRef.current.blur();
              setOpenChooseHotels(true);
            }}
          />
        </Col>

        <Col span={24} className="my-3">
          <Button type="primary" shape="round" size="large" block>
            Search Flight
          </Button>
        </Col>
      </Row>

      {openChooseHotals && (
        <ChooseHotalsModal
          visible={openChooseHotals}
          setVisible={(visible) => setOpenChooseHotels(visible)}
        />
      )}
    </>
  );
};

export default Hotel;
