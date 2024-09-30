import { useEffect, useState, useSyncExternalStore } from "react";
import PokemonCard from "../components/PokemonCard";
import SearchedPokemonCard from "../components/SearchedPokemonCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [pokeTitle, setPokeTitle] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const fetches = data.results.map((p) =>
          fetch(p.url).then((res) => res.json())
        );
        Promise.all(fetches).then((results) => {
          setPokemon(results);
          setLoading(false);
        });
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [offset]);

  console.log(pokemon);

  const searchPokemon = () => {
    setLoading(true);
    setPokemon("");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeTitle}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchedPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  // searchPokemon()

  console.log(searchedPokemon);

  const nextPage = () => {
    setOffset(offset + 10);
  };

  console.log(offset);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <>
          <div className="flex justify-center gap-2 my-5">
            <input
              type="text"
              onChange={(e) => setPokeTitle(e.target.value)}
              className="rounded-full px-5 border-solid border-2 border-red-600"
              placeholder="Catch a Pokemon..."
            />
            <button
              onClick={searchPokemon}
              className=" bg-red-600 hover:bg-white px-5 py-2 rounded-full text-white hover:text-red-600 hover:shadow-md hover:shadow-red-600"
            >
              search
            </button>
          </div>

          <div>
            {searchedPokemon && (
              <SearchedPokemonCard pokemons={searchedPokemon} />
            )}
          </div>
          {pokemon && <PokemonCard pokemons={pokemon} />}
          {pokemon && (
            <button
              className="bg-red-600 hover:bg-white px-5 py-2 rounded-full mx-auto block mt-28 mb-5 text-white hover:text-red-600 hover:shadow-md hover:shadow-red-600"
              onClick={nextPage}
            >
              next page
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Pokemons;
