"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      menus.forEach((menu) => {
        const section = document.getElementById(menu.path);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveMenu(menu.path);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (path: string) => {
    setActiveMenu(path);
    setIsOpen(false);
  };

  const menuClass = (path: string) =>
    `relative inline-block group pb-2 transition-colors ${
      activeMenu === path ? "text-primary" : "text-gray-300 hover:text-primary"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black/95 text-white px-6 md:px-20 h-20 md:h-20 flex items-center">
      <div
        className="w-full flex items-center justify-between"
        data-aos="fade-down"
      >
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menus.map((item) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={() => handleMenuClick(item.path)}
                className={menuClass(item.path)}
              >
                {item.name}

                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeMenu === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
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
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[76px] left-0 right-0 bottom-0 bg-black/98 backdrop-blur-lg md:hidden border-t border-white/10 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex pt-8 flex-col items-center justify-center gap-6">
          {menus.map((item, idx) => (
            <li
              key={item.path}
              className={`transition-all duration-300 transform ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <a
                href={`#${item.path}`}
                onClick={() => handleMenuClick(item.path)}
                className={`${menuClass(item.path)} text-md`}
              >
                {item.name}

                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeMenu === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
