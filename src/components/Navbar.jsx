import React from 'react';
import {NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5">
                <NavLink
                to='/'
                className={({ isActive }) =>
                    ` ${isActive ? 'text-yellow-500' : ''}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                    `${isActive ? 'text-yellow-500' : ''}`
                }
            >
                Dashboard
            </NavLink>
            </ul>
          </div>
          <a className="text-[20px] font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
          <NavLink
                to='/'
                className={({ isActive }) =>
                    ` ${isActive ? 'text-yellow-500' : ''}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                    `${isActive ? 'text-yellow-500' : ''}`
                }
            >
                Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
        <div className=''>
        <i class="fa-solid fa-cart-shopping mr-2 bg-white rounded-full "></i>
        <i class="fa-regular fa-heart"></i>
        </div>
        </div>
      </div>
    );
};

export default Navbar;