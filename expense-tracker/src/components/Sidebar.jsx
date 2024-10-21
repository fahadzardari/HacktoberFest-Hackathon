import PropTypes from "prop-types";
import { signOut } from "../services/auth.service";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar({ isOpen, toggleSidebar }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <aside
      className={`bg-gray-800 z-10 text-left text-md md:text-xl fixed h-screen text-white w-64 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="float-right p-4">
        <button
          className="text-gray-300 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <img src="/primary-logo.png" alt="logo" className="mx-auto" />
      <ul className="py-4">
        <Link to={"/"}>
          <li className="px-6 py-3 cursor-pointer">Dashboard</li>
        </Link>
        <Link to={"/category"}>
          <li className="px-6 py-3 cursor-pointer">Categories</li>
        </Link>
        <li
          className="px-6 py-3 cursor-pointer"
          onClick={() => setDropDown(!dropDown)}
        >
          Stock
        </li>

        <li
          className={`${
            dropDown ? "block" : "hidden"
          } bg-opacity-5 bg-gray-500 text-sm space-y-2 flex flex-col py-2`}
        >
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/stock"}>{">"} Stock List</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/addstock"}>{">"} Add Stock</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/makes"}>{">"} Make List</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/addmake"}>{">"} Add Make</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/models"}>{">"} Model List</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/addmodel"}>{">"} Add Model</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/packages"}>{">"} Package List</Link>
          </div>
          <div className="w-full px-9 cursor-pointer">
            <Link to={"/addpackage"}>{">"} Add Package</Link>
          </div>
        </li>

        <li className="px-6 py-3 ">
          <p
            onClick={ () => {
               signOut();
            }}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Sign Out
          </p>
        </li>
      </ul>
    </aside>
  );
}
Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  setCurrentMenu: PropTypes.func,
};