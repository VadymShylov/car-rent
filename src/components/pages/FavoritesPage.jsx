import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import React from 'react';
import { useSelector } from 'react-redux';

import Hero from 'components/Hero/Hero';
const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);
  console.log(favorites);
  return (
    <div>
      <Hero />
      <FavoriteItem />
    </div>
  );
};

export default FavoritesPage;
