import React, { useState } from "react";
import { Search, X } from "lucide-react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-5 py-3">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-2xl w-56"
            >
              <li><a>Home</a></li>
              <li><a>Hotels</a></li>
              <li><a>Destinations</a></li>
              <li><a>Deals</a></li>
              <li><a>About</a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="text-3xl font-serif font-semibold tracking-wide text-slate-800 cursor-pointer">
            MoonVale
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1 text-[15px] font-medium text-slate-600">

            <li>
              <a className="hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
                Hotels
              </a>
            </li>
              
                 <li>
              <a className="hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
               Reviews
              </a>
            </li>

         
            <li>
              <a className="hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
               Specials offers!
              </a>
            </li>
  <li>
              <a className="hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
               Contacts
              </a>
            </li>
       
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">

          {/* Search Area */}
          <div className="flex items-center">

            <div
              className={`overflow-hidden transition-all duration-300 ${
                showSearch
                  ? "w-56 opacity-100 mr-2"
                  : "w-0 opacity-0"
              }`}
            >
              <input
                type="text"
                placeholder="Search hotels..."
                className="input input-bordered rounded-full w-full border-slate-200 focus:outline-none focus:border-slate-400"
              />
            </div>

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="btn btn-circle btn-ghost hover:bg-slate-100 transition-all duration-300"
            >
              {showSearch ? (
                <X size={20} className="text-slate-700" />
              ) : (
                <Search size={20} className="text-slate-700" />
              )}
            </button>

          </div>

          {/* Login */}
          <button className="btn rounded-full px-6 bg-slate-900 text-white border-none hover:bg-slate-800 shadow-md">
            Login
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;