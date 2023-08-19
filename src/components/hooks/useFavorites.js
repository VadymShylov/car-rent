import { selectFavorites } from 'components/redux/fav/favSlice';
import { useSelector } from 'react-redux';

export const useFavorites = () => {
  const favorites = useSelector(selectFavorites);

  return favorites;
};

export const useExist = ({ catalog, favorites }) => {
  const findExist = favorites.some(r => r.items.id === catalog.items.id);
  return findExist;
};
