import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold text-blue-600">coinbase</span>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-blue-600">
              Cryptocurrencies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Individuals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Businesses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Institutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Developers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Company
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-1 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 text-sm font-medium">
          Sign in
        </button>
        <button className="px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
