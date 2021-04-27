import React from "react";
import Filters from "../Filters";
import Security from "../Security";
import Price from "../Price";
import Stops from "../Stops";
import Airlines from "../Airlines";
const Flightsidebar = () => {
  return (
    <>
      <Filters />
      <Security />
      <Price />
      <Stops />
      <Airlines />
    </>
  );
};
export default Flightsidebar;
