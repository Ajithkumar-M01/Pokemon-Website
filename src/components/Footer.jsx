import { Link } from "react-router-dom";
import pokeballWhite from "../assets/pokeballWhite.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Pokemons", to: "/pokemons" },
    { label: "Regions & Facts", to: "/funfacts" },
  ];

  return (
    <footer className="relative mt-10 pt-1">
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-2 top-0 z-10 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-base-200 text-base-content shadow-lg ring-1 ring-base-300 transition hover:scale-110 hover:bg-red-600 hover:text-white border border-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />

      <div className="bg-base-200 text-base-content">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={pokeballWhite}
                alt="pokeball logo"
                className="h-11 w-11 drop-shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold tracking-wide">Pokémon Explorer</h3>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
              A trainer&apos;s guide to the Pokémon world — browse Pokémons, explore the
              regions, and uncover fun facts about every generation.
            </p>
          </div>

          <nav aria-label="Quick links" className="md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-widest opacity-60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-80 transition hover:text-primary hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-base-300" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-sm sm:flex-row">
          <p className="opacity-80">
            Copyright © {year} Pokémon Explorer.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-sm opacity-80">
              Pokémon data provided by{" "}
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline underline-offset-2 transition hover:text-primary"
              >
                PokeAPI
              </a>
            </p>
          </div>
        </div>

        <div className="bg-black/10 px-6 py-3">
          <p className="text-center text-sm leading-relaxed opacity-90">
            Pokémon was created by Japanese video game designer Satoshi Tajiri, with
            original character designs by artist Ken Sugimori.
          </p>
          <div className="mx-auto mt-2 h-px w-1/4 min-w-[6rem] bg-base-content/20" />
          <p className="mt-2 text-center text-sm leading-relaxed opacity-90">
            Pokémon Explorer is a fan-made project and is not affiliated with, endorsed, or
            sponsored by The Pokémon Company, Nintendo, or Game Freak. Pokémon and Pokémon
            character names are trademarks of Nintendo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;