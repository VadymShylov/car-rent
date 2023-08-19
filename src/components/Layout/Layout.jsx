import { useFavorites } from 'components/hooks/useFavorites';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


import MobMenu from './MobMenu';

const Layout = () => {
  const favorites = useFavorites();

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleChangeNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <>
      <MobMenu
        handleChangeNav={handleChangeNav}
        nav={nav}
        favorites={favorites}
      />
      <Outlet />
    </>
  );
};

export default Layout;
