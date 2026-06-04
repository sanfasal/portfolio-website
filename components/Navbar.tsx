"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";

const menus = [
  { name: "Home", path: "home" },
  { name: "Services", path: "services" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skill" },
  { name: "Contact", path: "contact" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (path: string) => {
    setActiveMenu(path);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 text-white px-6 md:px-20 py-6">
      <div className="flex items-center justify-between" data-aos="fade-down">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menus.map((item) => (
            <li key={item.path}>
              <Link
                href={`#${item.path}`}
                onClick={() => handleMenuClick(item.path)}
                className={`relative group pb-2 transition-colors ${
                  activeMenu === item.path
                    ? "text-primary"
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                    activeMenu === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button title="Hire Me" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl cursor-pointer"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[88px] bg-gray-900 md:hidden">
          <ul className="flex flex-col items-center gap-8 pt-10">
            {menus.map((item) => (
              <li key={item.path}>
                <Link
                  href={`#${item.path}`}
                  onClick={() => handleMenuClick(item.path)}
                  className={`relative group pb-2 text-lg ${
                    activeMenu === item.path
                      ? "text-primary"
                      : "text-gray-300 hover:text-primary"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                      activeMenu === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
