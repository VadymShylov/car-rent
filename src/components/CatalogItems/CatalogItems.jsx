import SelectForm from 'components/SelectForm/SelectForm';
import SingleCard from 'components/SingleCard/SingleCard';
import { selectCategory } from 'components/redux/catalogThunks/catalogThunks';
import React from 'react';
import { useSelector } from 'react-redux';

const CatalogItems = ({ catalogs, loadMore }) => {
  const firstFetch = useSelector(selectCategory);
  return (
    <>
      <SelectForm firstFetch={firstFetch} />
      <SingleCard title=" List of Cars" catalogs={catalogs} />
    </>
  );
};

export default CatalogItems;
