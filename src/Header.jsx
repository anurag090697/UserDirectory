/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className='bg-amber-300 py-3'>
        <h1 className='mx-auto w-fit text-2xl font-medium text-emerald-600'>
          Anurag's Directory App
        </h1>
      </nav>
      <div className='text-xl font-medium flex gap-10 px-10 py-6'>
        <NavLink
          to='/'
          className='bg-lime-300 text-indigo-500 p-2 rounded-xl border border-lime-500 hover:bg-lime-50 shadow-md hover:shadow-none shadow-lime-800'
        >
          Add User
        </NavLink>
        <NavLink
          to='/retrieveuser'
          className='bg-lime-300 text-indigo-500 p-2 rounded-xl border border-lime-500 hover:bg-lime-50 shadow-md hover:shadow-none shadow-lime-800'
        >
          Retrieve User
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
