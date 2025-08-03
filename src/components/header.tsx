import React from "react";
import { useTheme } from "../context/themeContext";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import Logo from "../assets/Logo.png";
const Header: React.FC = () => {
  const { theme, setTheme } = useTheme(); // Use your theme context
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Conditional classNames based on the current theme
  const headerClasses =
    theme === "theme2"
      ? "fixed top-0 left-0 w-full z-50 bg-[#1F2937] text-gray-300 shadow-md"
      : "fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md";

  const selectClasses =
    theme === "theme2"
      ? "appearance-none bg-gray-700 text-gray-300 font-semibold px-4 py-1 rounded-md border border-gray-400 shadow focus:outline-none pr-10"
      : "appearance-none bg-purple-500 text-white font-semibold px-4 py-1 rounded-md border border-white shadow focus:outline-none pr-10";

  const optionClasses =
    theme === "theme2"
      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
      : "bg-pink-200 text-purple-900 hover:bg-pink-50 hover:text-purple-300";

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}

        <div className="flex space-x-[1px] justify-center items-center">
          <img src={Logo} alt="Multi Store" className="w-6 h-6 rounded-full" />
          <div className="md:text-xl font-extrabold tracking-wider text-sm ">
            ulti Store
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              className={selectClasses}
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
            >
              <option className={optionClasses} value="theme1">
                Default
              </option>
              <option className={optionClasses} value="theme2">
                Dark Mode
              </option>
              <option className={optionClasses} value="theme3">
                Color Mode
              </option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 font-medium">
            <Link
              to="/"
              className={`hover:font-bold ${
                isActive("/") ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:font-bold ${
                isActive("/about") ? "border-b-2 border-white" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:font-bold ${
                isActive("/contact") ? "border-b-2 border-white" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="md:flex items-center gap-4 hidden">
            <span>{FaUser({ className: "text-xl" })}</span>
            <span>{FaShoppingCart({ className: "text-xl" })}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
