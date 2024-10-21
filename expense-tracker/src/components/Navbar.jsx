import PropTypes from "prop-types";
import { useState } from "react";
export default function Navbar({toggleSidebar}) {

  return (
    <nav className="w-full bg-gray-800 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          className="text-gray-300 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
        {/* <img src="/primary-logo.png" alt="Logo" className="h-12"/> */}
        <h1 className="text-xl">Something liken logo</h1>
        </div>
        <div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
};