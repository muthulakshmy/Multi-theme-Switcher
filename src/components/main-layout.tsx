import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import Header from "./header";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const HEADER_HEIGHT_PX = 48;

  const showSidebar = location.pathname === "/" && theme === "theme2";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {showSidebar ? (
        // Layout for the home page with theme2: fixed sidebar on desktop, collapsible on mobile
        <div className="flex h-screen w-full relative overflow-hidden">
          {/* Mobile Hamburger Menu */}
          <div
            className={`absolute top-12 left-2 z-[100] md:hidden ${
              isSidebarOpen ? "hidden" : ""
            }`}
          >
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Open sidebar"
            >
              <span>{HiMenuAlt3({ size: 24 })}</span>
            </button>
          </div>

          {/* Desktop Sidebar (hidden on mobile) */}
          <aside
            className="hidden md:block w-48 bg-[#1F2937] text-gray-300 p-4 shrink-0"
            style={{ paddingTop: `${HEADER_HEIGHT_PX}px` }}
          >
            <ul className="space-y-1 mt-4">
              <li>
                <p className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  {FaUsers({})} Men{" "}
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  {FaUsers({})}
                  Women
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  {FaUserFriends({})}
                  Kids
                </p>
              </li>
            </ul>
          </aside>

          {/* Mobile Sidebar (fixed and collapsible on mobile) */}
          <aside
            className={`md:hidden fixed top-0 h-screen w-48 bg-[#1F2937] text-gray-300 transition-all duration-300 z-50 p-4 ${
              isSidebarOpen ? "left-0" : "left-[-12rem]"
            }`}
            style={{ paddingTop: `${HEADER_HEIGHT_PX}px` }}
          >
            {/* Close button for mobile */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-gray-400 hover:text-white focus:outline-none"
                aria-label="Close sidebar"
              >
                {/* <IoCloseSharp size={24} /> */}
                {IoCloseSharp({ size: 24 })}
              </button>
            </div>

            <ul className="space-y-1 mt-4">
              <li>
                <p className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  {FaUsers({})}
                  Men
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  {FaUsers({})}
                  Women
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                  {FaUserFriends({})}
                  Kids
                </p>
              </li>
            </ul>
          </aside>

          {/* Main content area */}
          <main
            className="flex-1 overflow-y-auto w-full bg-[#1e1e1e] text-white"
            style={{ paddingTop: `${HEADER_HEIGHT_PX}px` }}
          >
            {children}
          </main>
        </div>
      ) : (
        // Default layout for all other pages
        <div className="flex flex-col min-h-screen">
          <main
            className="flex-1 overflow-y-auto w-full "
            style={{ paddingTop: `${HEADER_HEIGHT_PX}px` }}
          >
            {children}
          </main>
        </div>
      )}
    </div>
  );
};

export default Layout;
