import { Link } from "react-router-dom";
import { useState } from "react";
import pokeball from "../assets/pokeball.png";
import pokemonTitle from "../assets/pokemon.png";
import ThemeController from "./ThemeController";
import sky1 from "../assets/sky1.jpg";
import sky2 from "../assets/sky2.png";
import sky3 from "../assets/sky3.jpg";
import { div } from "framer-motion/client";
const Navbar = () => {
  const [isDDOpen, setIsDDOpen] = useState(false);
  const handleLinkClick = () => {
    setIsDDOpen(false);
  };
  return (
    <div class="p-3 bg-orange-500">
      <div className="navbar px-5 bg-orange-200 rounded-full">
        <div className="flex-1">
          {/* <a href="/">
            <img
              src={pokemonTitle}
              alt="pokemon title"
              className="w-2/12 bg-sky-500 rounded-full p-2 -ml-2"
            />
          </a> */}
          <a href="/">
            <img
              src={pokemonTitle}
              alt="pokemon title"
              className="w-4/12 sm:w-3/12 md:w-2/12 lg:w-2/12 xl:w-1/12 bg-sky-500 rounded-full p-2 -ml-2.5"
            />
          </a>
        </div>
        <ThemeController />

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setIsDDOpen(true)}
            >
              <div className="w-20 rounded-full">
                <img alt="Pokeball" src={pokeball} />
              </div>
            </div>
            {isDDOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/"} onClick={handleLinkClick}>
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link to={"/pokemons"} onClick={handleLinkClick}>
                    Pokemons
                  </Link>
                </li>
                <li>
                  <Link to={"/funfacts"} onClick={handleLinkClick}>
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
