import Footer from 'components/Footer/Footer';
import Layout from 'components/Layout/Layout';
import CatalogPage from 'components/pages/CatalogPage';
import FavoritesPage from 'components/pages/FavoritesPage';
import HomePage from 'components/pages/HomePage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Roots = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Route>
      </Routes>

      <Footer/>
    </div>
  );
};

export default Roots;
