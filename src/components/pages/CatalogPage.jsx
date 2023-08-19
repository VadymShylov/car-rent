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
        <Hero/>
      <CatalogItems catalogs={values} loadMore={loadMore} />
      {values.length === catalogs.length ? (
        <p> End of the List</p>
      ) : (
        <button type="button" onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default CatalogPage;
