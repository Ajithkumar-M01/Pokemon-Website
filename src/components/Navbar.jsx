import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import pokeball from "../assets/pokeball.png";
import pokemonTitle from "../assets/pokemon.png";
import ThemeController from "./ThemeController";
const Navbar = () => {
  const [isDDOpen, setIsDDOpen] = useState(false);
  const handleLinkClick = () => {
    setIsDDOpen(false);
  };
  return (
    <div className="sticky top-0 z-40 p-3 bg-orange-500">
      <div className="navbar px-5 bg-orange-200 rounded-full">
        <div className="flex-1">
          {/* <a href="/">
            <img
              src={pokemonTitle}
              alt="pokemon title"
              className="w-2/12 bg-sky-500 rounded-full p-2 -ml-2"
            />
          </a> */}
<a href="/" className="flex items-center">
            <img
              src={pokemonTitle}
              alt="pokemon title"
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            />
          </a>
        </div>
        <ThemeController />

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open navigation menu"
              className="btn btn-ghost btn-circle avatar relative"
              onClick={() => setIsDDOpen(true)}
            >
              <div className="relative w-20 overflow-hidden rounded-full">
                <div className="relative rounded-full transition-transform duration-300 hover:scale-110 hover:-rotate-6 active:scale-95">
                  <img alt="Pokeball menu trigger" src={pokeball} />
                </div>
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-y-12 left-0 w-6 -rotate-25 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[2px]"
                  animate={{ x: ["-220px", "220px"], opacity: isDDOpen ? 0 : 1 }}
                  transition={{
                    x: {
                      duration: 3.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2.2,
                    },
                    opacity: { duration: 0.2 },
                  }}
                />
              </div>
            </button>
            {isDDOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-44 max-w-[calc(100vw-2rem)] border border-white/30 bg-white/20 p-2 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10 backdrop-blur-2xl sm:w-52 md:w-40"
            >
                <li>
                  <Link
                    to={"/"}
                    onClick={handleLinkClick}
                    className="flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white hover:shadow-lg hover:shadow-red-600/40 focus:outline-none focus:ring-2 focus:ring-red-400/60"
                  >
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/pokemons"}
                    onClick={handleLinkClick}
                    className="flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                  >
                    Pokemons
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/funfacts"}
                    onClick={handleLinkClick}
                    className="flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:shadow-lg hover:shadow-violet-600/40 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
                  >
                    Regions & Facts
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;