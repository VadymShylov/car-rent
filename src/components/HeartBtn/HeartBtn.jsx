import { useActions } from 'components/hooks/useAction';
import { useFavorites } from 'components/hooks/useFavorites';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const HeartBtn = ({ catalog }) => {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const isExists = favorites.some(r => r.id === catalog.id);

  return (
    <div className="absolute w-full h-full bg-black/30 rounded-xl text-white flex justify-end">
      <button type="button" onClick={() => toggleFavorites(catalog)}>
        {!isExists ? (
          <AiOutlineHeart
            size={16}
            className="absolute top-0 right-0 m-[16px] p=[8px]"
          />
        ) : (
          <AiFillHeart
            size={16}
            className="absolute top-0 right-0 m-[16px] p=[18px] text-blue-700"
          />
        )}
      </button>
    </div>
  );
};

export default HeartBtn;
