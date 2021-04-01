import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Row, Col } from "antd";
import { Select } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
const ChooseTravellerModal = ({
  visible,
  setVisible,
  traveller,
  setTraveller,
}) => {
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const { Option } = Select;

  function onChange(value) {
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

  return (
    <Modal
      title="Choose Travellers"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Done"
    >
      <Row>
        <Col span={16} className="pr-1 my-2">
          <label> Adults </label>
        </Col>

        <Col span={3} className="pl-1 my-2">
          <div className="text-center cursor-pointer">
            <MinusCircleOutlined
              size="large"
              className="primaryColor"
              onClick={() => setTraveller("adults", traveller.adults - 1)}
            />
          </div>
        </Col>

        <Col span={2} className="pl-1 my-2">
          <div className="text-center">{traveller.adults}</div>
        </Col>
        <Col span={3} className="pl-1 my-2">
          <div className="text-center cursor-pointer">
            <PlusCircleOutlined
              size="large"
              className="primaryColor"
              onClick={() => setTraveller("adults", traveller.adults + 1)}
            />
          </div>
        </Col>

        <Col span={16} className="pr-1 my-2">
          <label> Children Ages (2-17) </label>
        </Col>

        <Col span={3} className="pl-1 my-2">
          <div className="text-center cursor-pointer">
            <MinusCircleOutlined
              size="large"
              className="primaryColor"
              onClick={() =>
                setTraveller("childrenAge", traveller.childrenAge - 1)
              }
            />
          </div>
        </Col>

        <Col span={2} className="pl-1 my-2">
          <div className="text-center">{traveller.childrenAge}</div>
        </Col>
        <Col span={3} className="pl-1 my-2">
          <div className="text-center cursor-pointer">
            <PlusCircleOutlined
              size="large"
              className="primaryColor"
              onClick={() =>
                setTraveller("childrenAge", traveller.childrenAge + 1)
              }
            />
          </div>
        </Col>

        <Col span={16} className="pr-1 my-2">
          <label> Infants Age Under 0-2 </label>
        </Col>

        <Col span={3} className="pl-1 my-2">
          <div className="text-center cursor-pointer">
            <MinusCircleOutlined
              size="large"
              className="primaryColor"
              onClick={() => setTraveller("infantAge", traveller.infantAge - 1)}
            />
          </div>
        </Col>

        <Col span={2} className="pl-1 my-2">
          <div className="text-center"> {traveller.infantAge}</div>
        </Col>
        <Col span={3} className="pl-1 my-2">
          <div className="text-center cursor-pointer">
            <PlusCircleOutlined
              size="large"
              className="primaryColor"
              onClick={() => setTraveller("infantAge", traveller.infantAge + 1)}
            />
          </div>
        </Col>
        <Col span={24} className="pr-1 my-2" font="bold">
          <label> Class </label>
        </Col>
        <Col span={24} className="pl-1 my-2">
          <Select
            showSearch
            style={{ width: 450 }}
            placeholder="Economy"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Economy</Option>
            <Option value="lucy">Premium Economy</Option>
            <Option value="tom">Business</Option>
            <Option value="tom">First Class</Option>
          </Select>
          ,
        </Col>
      </Row>
    </Modal>
  );
};
export default ChooseTravellerModal;
