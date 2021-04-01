import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Row, Col, Card } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Select } from "antd";

const iconStyles = {
  color: "gray",
};

const ChooseHotalsModal = ({ visible, setVisible }) => {
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
    <>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Apply"
        title={
          <div>
            <div>ROOM 1</div>
            <span>
              <span>2</span>{" "}
              <span className="text-sm font-normal">Adults,</span>{" "}
              <span>1</span>{" "}
              <span className="text-sm font-normal">Children</span>
              <Button type="link">Edit</Button>
            </span>
          </div>
        }
      >
        {/* Room Adults */}
        <div className="font-bold text-base mb-2">
          <label>Room 1</label>
        </div>
        <Row className="mb-4">
          <Col span={8}>
            <label className="pb-2 text-gray-400">ADULTS (12y +)</label>
            <div className="flex items-center my-2">
              <Button
                type="secondary"
                icon={
                  <div className="flex items-center justify-center">
                    <MinusCircleOutlined style={iconStyles} />
                  </div>
                }
              />

              <Button type="primary">1</Button>

              <Button
                type="secondary"
                icon={
                  <div className="flex items-center justify-center">
                    <PlusCircleOutlined style={iconStyles} />
                  </div>
                }
              />
            </div>
          </Col>

          <Col span={8}>
            <label className="pb-2 text-gray-400"> (1y - 12y )</label>

            <div className="flex items-center my-2">
              <Button
                type="secondary"
                icon={
                  <div className="flex items-center justify-center">
                    <MinusCircleOutlined style={iconStyles} />
                  </div>
                }
              />

              <Button type="primary">1</Button>

              <Button
                type="secondary"
                icon={
                  <div className="flex items-center justify-center">
                    <PlusCircleOutlined style={iconStyles} />
                  </div>
                }
              />
            </div>
          </Col>

          <Col span={8}>
            <label className="pb-2 text-gray-400">Child 1 age</label>

            <br />
            <div className="flex items-center my-2">
              <Select
                showSearch
                placeholder="1"
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
                {[...Array(12).keys()].map((number) => (
                  <Option key={number + 1} value={number + 1}>
                    {number + 1}
                  </Option>
                ))}
              </Select>
            </div>
          </Col>
        </Row>

        <Card className="shadow-md">
          <Button type="primary" ghost>
            <div className="flex items-center">
              <PlusCircleOutlined className="flex items-center mr-2" />
              <span className="flex items-center">ADD ANOTHER ROOM</span>
            </div>
          </Button>
        </Card>
      </Modal>
    </>
  );
};

export default ChooseHotalsModal;
