"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);

  // Create refs for the header menu and its submenus
  const menuRef = useRef(null);
  const subMenuRef = useRef(null);
  const subSubMenuRef = useRef(null);

  // Close all menus when a click outside is detected
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target) &&
        subSubMenuRef.current &&
        !subSubMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setOpenSubMenu(null);
        setOpenSubSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  const toggleSubSubMenu = (index) => {
    setOpenSubSubMenu(openSubSubMenu === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex py-5 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <img src="/assets/images/header/logo.svg" layout="full" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            src="/assets/images/header/dropdown.svg"
            className="ml-2 w-[10px] h-[5px]"
          />
        </button>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col items-center space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-6 md:p-0">
            {/* Menu Item 1 */}
            <li className="relative group">
              <Link href="/use-case">Home</Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center justify-between w-full text-gray-700 md:w-auto hover:text-[#FE5C00]"
                onClick={() => toggleSubMenu(0)}
              >
                Solution
                <img
                  src="/assets/images/header/dropdown.svg"
                  className="ml-2 w-[10px] h-[5px]"
                />
              </button>
              {/* Submenu */}
              {openSubMenu === 0 && (
                <ul
                  ref={subMenuRef}
                  className="absolute rounded-[12px] left-0 mt-2 w-48 bg-white"
                >
                  <li className="relative group">
                    <li>
                      <Link
                        href="/financial-services"
                        className="block px-4 py-2 text-gray-700 hover:text-[#FE5C00] hover:bg-gray-50"
                      >
                        By AWS Service
                      </Link>
                    </li>
                    <button
                      className="flex items-center justify-between w-full text-gray-700 hover:text-[#FE5C00] hover:bg-gray-50 px-4 py-2"
                      onClick={() => toggleSubSubMenu(0)}
                    >
                      By Industry
                      <img
                        src="/assets/images/header/dropdown.svg"
                        className="ml-2 w-[10px] -rotate-90 h-[5px]"
                      />
                    </button>
                    {/* Sub-Submenu */}
                    {openSubSubMenu === 0 && (
                      <ul
                        ref={subSubMenuRef}
                        className="absolute left-full top-0 mt-0 w-48 bg-white border border-gray-200 shadow-md"
                      >
                        <li>
                          <Link
                            href="/healthcare"
                            className="block px-4 py-2 text-gray-700 hover:text-[#FE5C00] hover:bg-gray-50"
                          >
                            Healthcare
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Menu Item 2 */}
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#FE5C00]"
              >
                About
              </Link>
            </li>

            {/* Menu Item 3 */}
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#FE5C00]"
              >
                Contact
              </Link>
            </li>
            <li>
              <button className="border border-[#212121] text-[#212121] rounded-full px-4 py-2 hover:text-white">
                Get Trial
              </button>
            </li>
            <li>
              <button className="bg-[#FE5C00] rounded-full px-4 py-2 text-white">
                Request a Demo
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
