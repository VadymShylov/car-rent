import { useField } from 'formik';
import React from 'react';
import DropdownIndicator from './DropdownIndicator';
import Select from 'react-select';

const SelectCar = ({title, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
        <p>{title}</p>
      <Select
        styles=""
        components={{ DropdownIndicator }}
        {...field}
        {...props}
      />
    </div>
  );
};

export default SelectCar;
