import NavLink from "../navLink/NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";
import Logo from "../../assets/logo.png";
import cv from "../../assets/AlbertinoVieira.pdf";

const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#career", title: "Career" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-20 px-4 md:px-6 pt-4" aria-label="Main navigation">
      <div className="max-w-8xl mx-auto rounded-2xl border border-slate-800/90 bg-[#121212]/90 backdrop-blur-md shadow-lg shadow-black/30">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Albertino Vieira homepage"
          >
            <img src={Logo} alt="logo" className="h-10 w-10 rounded-full" />
            <span className="hidden sm:block text-white font-semibold tracking-wide">
              Albertino Vieira
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} title={link.title} />
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={cv}
              download
              className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
          </div>

          <button
            onClick={() => setNavbarOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            aria-expanded={navbarOpen}
            aria-controls="mobile-menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {navbarOpen && (
          <div id="mobile-menu" className="px-4 pb-4">
            <MenuOverlay
              links={navLinks}
              onItemClick={() => setNavbarOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
