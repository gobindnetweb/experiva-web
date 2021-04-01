import React from "react";
import { DatePicker, Space } from "antd";
const Date = (props) => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <Space direction="vertical">
        <DatePicker size="large" onChange={onChange} {...props} />
      </Space>
    </>
  );
};
export default Date;
