import SelectForm from 'components/SelectForm/SelectForm';
import SingleCard from 'components/SingleCard/SingleCard';
import { useFavorites } from 'components/hooks/useFavorites';
import { selectCategory } from 'components/redux/catalogThunks/catalogThunks';
import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteItem = () => {
  const favorites = useFavorites();
  const firstFetch = useSelector(selectCategory);
  return (
    <>
      <SelectForm firstFetch={firstFetch} />
      {favorites.length === 0 ? (
        'Here is Empty'
      ) : (
        <SingleCard title="Favorite Item" catalogs={favorites} />
      )}
    </>
  );
};

export default FavoriteItem;
