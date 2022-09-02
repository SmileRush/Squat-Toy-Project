import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='flex flex-shrink-0'>
        <NavLink to='/main' className='mr-auto p-3 font-bold hover:text-red-500 cursor-pointer'>로고</NavLink>
        <ul className='flex'>
          <li>
            <NavLink to='/main' className={({ isActive }) => classNames(`block p-3 font-bold hover:text-red-500 cursor-pointer`, { 'text-red-500':isActive})}>홈</NavLink>
          </li>
          <li>
            <NavLink to='/history' className='block p-3 font-bold hover:text-red-500 cursor-pointer'>히스토리</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header