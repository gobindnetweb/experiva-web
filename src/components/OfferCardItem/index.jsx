import React from "react";
import { Card } from "antd";

const OfferCardItem = ({ offer }) => {
  return (
    <>
      <Card
        title={offer?.title}
        className="hover:shadow-xl"
        extra={<a href="#">{offer?.icon}</a>}
      >
        <p>{offer?.description}</p>
      </Card>
    </>
  );
};
export default OfferCardItem;
