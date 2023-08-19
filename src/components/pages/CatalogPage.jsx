import CatalogItems from 'components/CatalogItems/CatalogItems';
import Hero from 'components/Hero/Hero';
import {
  getCatalogThunk,
  selectCategory,
} from 'components/redux/catalogThunks/catalogThunks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalogs = useSelector(selectCategory);
  const [values, setValues] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const loadMore = () => {
    setLimit(limit + 8);
    setPage(page + 1);
  };

  useEffect(() => {
    if (catalogs.length === 0) {
      dispatch(getCatalogThunk());
    } else {
      setValues(catalogs.slice(0, limit));
      setPage(page);
    }
  }, [catalogs, dispatch, limit, page]);

  return (
    <>
      <Hero />
      <CatalogItems catalogs={values} loadMore={loadMore} />
      {values.length === catalogs.length ? (
        <p> End of the List</p>
      ) : (
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={loadMore}
            className="text-[16px] underline font-medium leading-6 text-[#3470FF]"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
