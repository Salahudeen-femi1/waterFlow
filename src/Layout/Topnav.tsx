import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItmes } from '../lib/navItems';
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Topnav() {
  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            {/* <Image /> */}
          </span>
          <p className="font-semibold text-[18px] text-black">WaterFlow</p>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-6">
          {navItmes.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-all duration-300 hover:font-semibold hover:text-primary ${
                    isActive ? ' text-primary font-semibold' : 'text-black'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='flex gap-5'>
            <span><IoIosNotifications size={20} className='text-primary' /></span>
            <span><FaUser size={20} className='text-primary' /></span>

        </div>

      </div>
    </nav>
  );
}
