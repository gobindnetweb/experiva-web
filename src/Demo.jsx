import React, { useState } from "react";
import { Table, Divider } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Phone",
    dataIndex: "Phone",
  },
  {
    title: "Email",
    dataIndex: "Email",
  },
  {
    title: "Website",
    dataIndex: "Website",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    Phone: 4586974563,
    Email: "john@gmail.com",
    Website: "Amazon",
  },
  {
    key: "2",
    name: "Jim Green",
    Phone: 4264259658,
    Email: "roman@gmail.com",
    Website: "Flipkart",
  },
  {
    key: "3",
    name: "Joe Black",
    Phone: 25894265498,
    Email: "king@gmail.com",
    Website: "Ebay",
  },
  {
    key: "4",
    name: "Disabled User",
    Phone: 4512659568,
    Email: "ronaldo@gmail.com",
    Website: "Google",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const Demo = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default Demo;
