"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
      // Check if the clicked element is outside the menu or submenu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target) &&
        subSubMenuRef.current &&
        !subSubMenuRef.current.contains(event.target)
      ) {
        // Close all menus
        setIsMenuOpen(false);
        setOpenSubMenu(null);
        setOpenSubSubMenu(null);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSubMenu = (menuKey) => {
    setOpenSubMenu((prev) => (prev === menuKey ? null : menuKey));
  };
  const toggleSubSubMenu = (submenuKey) => {
    setOpenSubSubMenu((prev) => (prev === submenuKey ? null : submenuKey));
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container xl:text-base lg:text-xs mx-auto flex py-5 md:items-center justify-between px-2">
        {/* Logo Section */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <img src="/assets/images/header/logo.svg" layout="full" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          <img
            src={
              isMenuOpen
                ? "/assets/images/header/close.svg"
                : "/assets/images/header/menu.svg"
            }
            alt="menu-toggle"
            className="transition-all w-6 h-6 duration-300 ease-in-out"
          />
        </button>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white lg:static lg:block lg:w-auto`}
        >
          <ul className="flex flex-col md:items-center space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0">
            {/* Menu Item 1 */}
            <li className="relative group" onClick={toggleMenu}>
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center justify-between w-full md:w-auto "
                onClick={() => toggleSubMenu(0)}
              >
                Solution
                <img
                  src="/assets/images/header/dropdown.svg"
                  className={`ml-2 w-[10px] h-[5px] transform transition-transform duration-200 ${
                    openSubMenu === 0 ? "rotate-180" : ""
                  }`}
                  alt="dropdown"
                />
              </button>
              {/* Submenu */}
              {openSubMenu === 0 && (
                <ul
                  ref={subMenuRef}
                  className="absolute rounded-xl md:left-0 mt-2 shadow w-max z-40 bg-white"
                >
                  <li className="relative">
                    <li
                      className="m-2"
                      onClick={() => {
                        toggleSubMenu(0);
                        toggleMenu();
                      }}
                    >
                      <Link
                        href="/solution/aws-services"
                        className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                      >
                        By AWS Service
                      </Link>
                    </li>
                    <li className="m-2">
                      <button
                        className="flex rounded-xl items-center z-40 justify-between w-full hover:bg-[#3432CA] hover:text-white px-4 py-2 group"
                        onClick={() => toggleSubSubMenu(0)}
                      >
                        By Industry
                        <img
                          src="/assets/images/header/dropdown.svg"
                          className="ml-2 w-[10px] h-[5px] -rotate-90 "
                          alt="dropdown"
                        />
                      </button>
                    </li>
                    {/* Sub-Submenu */}
                    {openSubSubMenu === 0 && (
                      <ul
                        ref={subSubMenuRef}
                        className="lg:absolute md:left-full lg:ml-0 ml-5 overflow-hidden py-2 z-50 top-0 lg:mt-10 w-max bg-white rounded-xl shadow-xl"
                      >
                        <li
                          className="m-2"
                          onClick={() => {
                            toggleSubMenu(0);
                            toggleMenu();
                          }}
                        >
                          <Link
                            href="/solution/healthcare"
                            className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                          >
                            Healthcare
                          </Link>
                        </li>
                        <li
                          className="m-2"
                          onClick={() => {
                            toggleSubMenu(0);
                            toggleMenu();
                          }}
                        >
                          <Link
                            href="/solution/financial-service"
                            className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                          >
                            Financial Services
                          </Link>
                        </li>
                      </ul>
                    )}
                    <li className="m-2">
                      <button
                        className="flex rounded-xl items-center justify-between w-full hover:bg-[#3432CA] hover:text-white px-4 py-2 group"
                        onClick={() => toggleSubSubMenu(1)}
                      >
                        By Use Case
                        <img
                          src="/assets/images/header/dropdown.svg"
                          className="ml-2 w-[10px] h-[5px] -rotate-90 "
                          alt="dropdown"
                        />
                      </button>
                    </li>
                    {/* Sub-Submenu */}
                    {openSubSubMenu === 1 && (
                      <ul
                        ref={subSubMenuRef}
                        className="lg:absolute md:left-full lg:ml-0 ml-5 py-2 z-50 top-14 lg:mt-10 w-max bg-white rounded-xl shadow-md"
                      >
                        <li
                          className="m-2"
                          onClick={() => {
                            toggleSubMenu(1);
                            toggleMenu();
                          }}
                        >
                          <Link
                            href="/solution/ransomware-protection"
                            className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                          >
                            Ransomware Protection
                          </Link>
                        </li>
                        <li
                          className="m-2"
                          onClick={() => {
                            toggleSubMenu(1);
                            toggleMenu();
                          }}
                        >
                          <Link
                            href="/solution/region-redundancy"
                            className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                          >
                            Multi-Region Redundancy
                          </Link>
                        </li>
                        <li
                          className="m-2"
                          onClick={() => {
                            toggleSubMenu(1);
                            toggleMenu();
                          }}
                        >
                          <Link
                            href="/solution/hybrid-cloud"
                            className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                          >
                            Hybrid Cloud
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center justify-between w-full md:w-auto "
                onClick={() => toggleSubMenu(5)}
              >
                Product
                <img
                  src="/assets/images/header/dropdown.svg"
                  className={`ml-2 w-[10px] h-[5px] transform transition-transform duration-200 ${
                    openSubMenu === 1 ? "rotate-180" : "rotate-0"
                  }`}
                  alt="dropdown"
                />
              </button>
              {/* Submenu */}
              {openSubMenu === 5 && (
                <ul
                  ref={subMenuRef}
                  className="absolute rounded-xl md:left-0 mt-2 shadow w-max z-40 bg-white"
                >
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(4);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/product/cloud-edition"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      NIMESA Cloud Edition
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center justify-between w-full md:w-auto "
                onClick={() => toggleSubMenu(2)}
              >
                Resources
                <img
                  src="/assets/images/header/dropdown.svg"
                  className={`ml-2 w-[10px] h-[5px] transform transition-transform duration-200 ${
                    openSubMenu === 2 ? "rotate-180" : "rotate-0"
                  }`}
                  alt="dropdown"
                />
              </button>
              {/* Submenu */}
              {openSubMenu === 2 && (
                <ul
                  ref={subMenuRef}
                  className="absolute rounded-xl md:left-0 mt-2 shadow w-max z-40 bg-white"
                >
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(2);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/resources/why-nimesha"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Why Nimesa
                    </Link>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(2);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/resources/date-sheet"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Datasheet and Whitepaper
                    </Link>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(2);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(2);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/resources/videos"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center justify-between w-full md:w-auto "
                onClick={() => toggleSubMenu(3)}
              >
                Company
                <img
                  src="/assets/images/header/dropdown.svg"
                  className="ml-2 w-[10px] h-[5px]"
                />
              </button>
              {/* Submenu */}
              {openSubMenu === 3 && (
                <ul
                  ref={subMenuRef}
                  className="absolute rounded-xl md:left-0 mt-2 shadow w-max z-40 bg-white"
                >
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(3);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/company/about-us"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(3);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/company/our-team"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Meet Our Team
                    </Link>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(3);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/company/gallery"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li
                    className="m-2"
                    onClick={() => {
                      toggleSubMenu(3);
                      toggleMenu();
                    }}
                  >
                    <Link
                      href="/company/contact-us"
                      className="block px-4 py-2 rounded-xl hover:bg-[#3432CA] hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <Link href="/careers" onClick={toggleMenu}>
                <button
                  className="flex items-center justify-between w-full md:w-auto "
                  onClick={() => toggleSubMenu(4)}
                >
                  Career
                  <img
                    src="/assets/images/header/dropdown.svg"
                    className="ml-2 w-[10px] h-[5px]"
                  />
                </button>
              </Link>
              {/* Submenu */}
              {openSubMenu === 4 && (
                <ul
                  ref={subMenuRef}
                  className="absolute rounded-xl md:left-0 mt-2 shadow w-max z-40 bg-white"
                ></ul>
              )}
            </li>

            <li>
              <Link href="/demo" onClick={toggleMenu}>
                <button className="bg-blue rounded-full px-4 py-2 text-white">
                  Request a Demo
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
