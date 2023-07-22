import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { viktor_logo, logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={viktor_logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10"></ul>
      </div>
    </nav>
  )
}

export default Navbar