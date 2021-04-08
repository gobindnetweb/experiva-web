import React, { useEffect, useState } from "react";
import { Select } from "antd";
import AIRPORTS from "../../utils/airports.json";
const MAX_RESULT = 20;
const AirportAutoComplete = () => {
  const [options, setOptions] = useState(AIRPORTS.slice(0, MAX_RESULT));
  const [airportData, setAirportData] = useState({
    open: false,
    searchText: "",
  });
  const [selectedAirport, setSelectedAirport] = useState(null);
  useEffect(() => {
    const { searchText, open } = airportData;
    if (searchText && open) {
      const filteredValue = AIRPORTS.filter((airport) =>
        airport.name.toLowerCase().includes(searchText.toLowerCase())
      ).slice(0, MAX_RESULT);
      setOptions(filteredValue);
    }
  }, [airportData]);
  console.log(airportData.searchText, "airportData.searchText");
  return (
    <Select
      allowClear
      onClear={() => {
        setAirportData({
          open: false,
          searchText: "",
        });
        setSelectedAirport(null);
        setOptions(AIRPORTS.slice(0, MAX_RESULT));
      }}
      open={airportData.open}
      showSearch
      value={selectedAirport?.name}
      placeholder="Chandigarh"
      className="w-full"
      optionFilterProp="name"
      filterOption={false}
      onKeyUp={(event) => {
        setAirportData((prevState) => ({
          ...prevState,
          searchText: event.target.value,
        }));
      }}
      onDropdownVisibleChange={(open) => {
        setAirportData((prevState) => ({
          ...prevState,
          open,
        }));
      }}
      onSelect={(searchText) => {
        setSelectedAirport(
          AIRPORTS.find((airport) => airport.name === searchText)
        );
        setAirportData({
          open: false,
          searchText: "",
        });
        setOptions(AIRPORTS.slice(0, MAX_RESULT));
      }}
    >
      {options.map((airport) => (
        <Select.Option
          value={airport.name}
          key={airport.name}
          label={airport.name}
        >
          <div className="flex justify-between items-center">
            {airport.name}
            <span className="flex items-center">
              <span>{airport.iata}</span>
            </span>
          </div>
        </Select.Option>
      ))}
    </Select>
  );
};
export default AirportAutoComplete;
