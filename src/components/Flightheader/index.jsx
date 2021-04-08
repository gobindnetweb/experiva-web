import React, { useRef, useState } from "react";
import { Row, Col } from "antd";
import { Select } from "antd";
import { Input, Button } from "antd";
import { EditOutlined, SwapOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import AirportAutoComplete from "../AirportAutoComplete";

const Flightheader = ({ openChooseTraveller, tripType, changeTripType }) => {
  const openTravellerRef = useRef();
  const { Option } = Select;

  function onChange(value) {
    changeTripType(value);
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

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
    <>
      <div className="flight shadow-xl border ml-28 mr-28 mb-4">
        <div className="p-4">
          <Row>
            <Col span={3}>
              <div className="font-bold" style={{ color: "#fff" }}>
                Trip Tape
              </div>

              <Select
                showSearch
                style={{ width: 150 }}
                placeholder="One Way"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="oneway">One Way</Option>
                <Option value="return">Return</Option>
                <Option value="multishop">Multishop</Option>
              </Select>
            </Col>
            <Col span={3}>
              <div
                className="font-extrabold ml-8"
                size="normal"
                style={{ width: 150, color: "#fff" }}
              >
                from
                <AirportAutoComplete />
              </div>
            </Col>

            <Col span={2}>
              <div
                className="font-bold text-3xl"
                size="normal"
                style={{ width: 150, color: "#fff" }}
              >
                <SwapOutlined className="mt-6 ml-16" />
              </div>
            </Col>

            <Col span={4}>
              <div
                className="font-bold ml-10"
                style={{ width: 150, color: "#fff" }}
              >
                To
                <AirportAutoComplete />
              </div>
            </Col>
            <Col span={4}>
              <span className="font-bold ml-8" style={{ color: "#fff" }}>
                Depature Date
              </span>
              <div className="ml-8">
                <DatePicker style={{ width: 150 }} />
              </div>
            </Col>
            <Col span={4}>
              <span className="font-bold ml-8" style={{ color: "#fff" }}>
                Passengers & Class
              </span>
              <div className="ml-8">
                <Input
                  ref={openTravellerRef}
                  style={{ width: 150 }}
                  size="normal"
                  type="text"
                  placeholder=" 1 Travellers, Economy"
                  onFocus={() => {
                    openTravellerRef.current.blur();
                    openChooseTraveller();
                  }}
                />
              </div>
            </Col>
            <Col span={4}>
              <div className="mt-5 resize-y text-xs ml-8">
                <Button
                  className="bg-red-500"
                  style={{
                    width: 150,
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  <EditOutlined /> Modify
                </Button>
              </div>
            </Col>
          </Row>

          {tripType === "return" && (
            <Row>
              <Col span={6}>
                <div className="header">
                  <div
                    className="font-extrabold"
                    size="normal"
                    style={{ width: 150, color: "#fff" }}
                  >
                    from
                    <AirportAutoComplete />
                  </div>
                </div>
              </Col>

              <Col span={2}>
                <div
                  className="font-bold text-3xl"
                  size="normal"
                  style={{ width: 150, color: "#fff" }}
                >
                  <SwapOutlined className="mt-6 ml-16" />
                </div>
              </Col>

              <Col span={4}>
                <div className="header1">
                  <div
                    className="font-bold"
                    style={{ width: 150, color: "#fff" }}
                  >
                    To
                    <AirportAutoComplete />
                  </div>
                </div>
              </Col>

              <Col span={4}>
                <span className="font-bold ml-8" style={{ color: "#fff" }}>
                  Depature Date
                </span>
                <div className="ml-8">
                  <DatePicker style={{ width: 150 }} />
                </div>
              </Col>

              <Col span={4}>
                <span className="font-bold ml-8" style={{ color: "#fff" }}>
                  Passengers & Class
                </span>
                <div className="ml-8">
                  <Input
                    ref={openTravellerRef}
                    style={{ width: 150 }}
                    size="normal"
                    type="text"
                    placeholder=" 1 Travellers, Economy"
                    onFocus={() => {
                      openTravellerRef.current.blur();
                      openChooseTraveller();
                    }}
                  />
                </div>
              </Col>
            </Row>
          )}
        </div>

        {[...new Array(count)].map((ec) => (
          <Row>
            <Col span={6}>
              <div className="multi">
                <div
                  className="font-extrabold"
                  size="normal"
                  style={{ width: 150, color: "#fff" }}
                >
                  from
                  <AirportAutoComplete />
                </div>
              </div>
            </Col>

            <Col span={2}>
              <div
                className="font-bold text-3xl"
                size="normal"
                style={{ width: 150, color: "#fff" }}
              >
                <SwapOutlined className="mt-6 ml-16" />
              </div>
            </Col>

            <Col span={4}>
              <div className="multicity">
                <div
                  className="font-bold"
                  style={{ width: 150, color: "#fff" }}
                >
                  To
                  <AirportAutoComplete />
                </div>
              </div>
            </Col>

            <Col span={4}>
              <span className="font-bold ml-8" style={{ color: "#fff" }}>
                Depature Date
              </span>
              <div className="ml-8">
                <DatePicker style={{ width: 150 }} />
              </div>
            </Col>

            <Col span={4}>
              <span className="font-bold ml-8" style={{ color: "#fff" }}>
                Passengers & Class
              </span>
              <div className="ml-8">
                <Input
                  ref={openTravellerRef}
                  style={{ width: 150 }}
                  size="normal"
                  type="text"
                  placeholder=" 1 Travellers, Economy"
                  onFocus={() => {
                    openTravellerRef.current.blur();
                    openChooseTraveller();
                  }}
                />
              </div>
            </Col>
          </Row>
        ))}

        {tripType === "multishop" && (
          <Row>
            <Col span={24}>
              <h1>{count}</h1>
              <div className="font-bold ml-48 mt-0 mb-2">
                <Button type="text" onClick={SetCity}>
                  <span className="text-sm text-red-500 font-semibold flex items-center justify-center">
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
          </Row>
        )}
      </div>
    </>
  );
};
export default Flightheader;
