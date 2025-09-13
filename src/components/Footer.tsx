import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-100 text-gray-600 py-8 px-8 flex flex-col md:flex-row items-center justify-between">
    <span className="text-sm">
      &copy; {new Date().getFullYear()} Coinbase. All rights reserved.
    </span>
    <div className="flex gap-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-blue-600 text-sm">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-blue-600 text-sm">
        Terms
      </a>
      <a href="#" className="hover:text-blue-600 text-sm">
        Support
      </a>
    </div>
  </footer>
);

export default Footer;
