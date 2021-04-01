import React, { useEffect, useState } from "react";
import { Select } from "antd";
import CITIES from "../../utils/cities.json";
const MAX_RESULT = 20;
const CityAutoComplete = () => {
  const [options, setOptions] = useState(CITIES.slice(0, MAX_RESULT));
  const [cityData, setCityData] = useState({
    open: false,
    searchText: "",
  });
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    const { searchText, open } = cityData;
    if (searchText && open) {
      const filteredValue = CITIES.filter((city) =>
        city.CityName.toLowerCase().includes(searchText.toLowerCase())
      ).slice(0, MAX_RESULT);
      console.log(filteredValue, "filteredValue filteredValue");
      setOptions(filteredValue);
    }
  }, [cityData]);
  return (
    <>
      <Select
        allowClear
        onClear={() => {
          setCityData({
            open: false,
            searchText: "",
          });
          setSelectedCity(null);
          setOptions(CITIES.slice(0, MAX_RESULT));
        }}
        open={cityData.open}
        showSearch
        value={selectedCity?.CityName}
        placeholder="Chandigarh"
        size="large"
        className="w-full"
        optionFilterProp="CityName"
        filterOption={false}
        onKeyUp={(event) => {
          setCityData((prevState) => ({
            ...prevState,
            searchText: event.target.value,
          }));
        }}
        onDropdownVisibleChange={(open) => {
          setCityData((prevState) => ({
            ...prevState,
            open,
          }));
        }}
        onSelect={(searchText) => {
          setSelectedCity(CITIES.find((city) => city.CityName === searchText));
          setCityData({
            open: false,
            searchText: "",
          });
          setOptions(CITIES.slice(0, MAX_RESULT));
        }}
      >
        {options.map((city) => (
          <Select.Option
            value={city.CityName}
            key={city.CityName}
            label={city.CityName}
          >
            <div className="flex justify-between items-center">
              {city.CityName}
              <span className="flex items-center">
                <span>
                  {city.CityName} ({city.CountryCode})
                </span>
              </span>
            </div>
          </Select.Option>
        ))}
      </Select>
    </>
  );
};
export default CityAutoComplete;
