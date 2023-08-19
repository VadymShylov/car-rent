import SingleCard from 'components/SingleCard/SingleCard';
import React, { useState } from 'react';

import Select from 'react-select';
const SelectForm = ({ firstFetch }) => {
  const [brand, setBrand] = useState('');

  const [label, setLabel] = useState();
  const [prise, setPrise] = useState(0);

  const model = [];
  firstFetch.map(item => model.push(item.make));
  const uniqueModel = model.filter(
    (m, index, array) => array.indexOf(m) === index
  );
  const price = [];
  firstFetch.map(item => price.push(item.rentalPrice));
  const uniquePrice = price.filter(
    (m, index, array) => array.indexOf(m) === index
  );

  const handleSubmit = () => {
    const filteredAdverts = firstFetch.filter(
      searchCar =>
        label === '' ||
        searchCar.make === label ||
        prise === '' ||
        searchCar.rentalPrice === prise
    );
    setBrand(filteredAdverts);
  };

  const handleValueChange = selectedOption => {
    setLabel(selectedOption.value);
  };
  const handlePriceChange = selectedOption => {
    setPrise(selectedOption.value);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-[35px] gap-[18px]">
        <Select
          options={uniqueModel?.map(option => ({
            value: option,
            label: option,
            id: option.id,
          }))}
          onChange={handleValueChange}
          placeholder="Enter the text"
          className="w-[300px]"
        />

        <Select
          options={uniquePrice?.map(option => ({
            value: option,
            label: option,
            id: option.id,
          }))}
          onChange={handlePriceChange}
          placeholder="To"
          className="w-[250px]"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="text-[14px] font-semibold leading-5 bg-[#3470ff] justify-center items-center px-[44px] py-[14px] text-white  rounded  "
        >
          Search
        </button>
      </div>
      {brand && <SingleCard catalogs={brand} />}
    </>
  );
};

export default SelectForm;
