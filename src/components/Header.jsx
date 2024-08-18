import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:justify-start">
            <NavLink to="/">
              <h1 className="text-white font-extrabold md:text-3xl text-2xl">
                Redux-toolkit
              </h1>
            </NavLink>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>
                <Link
                  to="/cart"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Cart
                </Link>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <div className="  flex justify-center items-center">
                <div className="relative py-">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-1 w-1 items-center justify-center rounded-full bg-blue-500 p-2 text-xs text-white">
                      3
                    </p>
                  </div>
                  <ShoppingCart className="text-white" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
