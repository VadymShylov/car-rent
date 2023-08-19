import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import logo from '../../assets/Logo.png'
import { useFavorites } from 'components/hooks/useFavorites';
const MobMenu = () => {
   const favorites = useFavorites();

  const [nav, setNav] = useState(false);
  const [color,setColor ] = useState('transparent');
  const [textColor,setTextColor ] = useState('white');

  const handleNav = () => {
    setNav(!nav);
   };
       useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor("#3470FF");
          setTextColor("#ffffff");
        } else {
          setColor("transparent");
          setTextColor("#ffffff");
        }
      };
      window.addEventListener("scroll", changeColor);
    }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1280px] m-auto flex justify-between items-center p-4 text-white">
        <Link to="/home">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            <img src={logo} alt="logo" />
          </h1>
        </Link>

        <ul style={{ color: `${textColor}` }} className=" hidden sm:flex gap-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites <span className='bg-blue-600/40 w-[10px]'>{favorites.length}</span>
            </Link>
          </li>
        </ul>

        {/* Mobile btn */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/catalog">Catalog</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/favorites">
                Favorites <span>{favorites.length}</span>
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
