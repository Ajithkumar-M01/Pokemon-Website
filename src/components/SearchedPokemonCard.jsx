import PokemonDetails from "./PokemonDetails";

const SearchedPokemonCard = ({ pokemons }) => {
  return (
    <div className="flex justify-center">
      {/* <div className="card bg-base-100 w-96 shadow-xl cardFlex" key={pokemons.id}>
        <figure className="px-10 pt-10">
          <img
            src={pokemons.sprites.other.dream_world.front_default}
            alt={pokemons.name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
                  <h2 className="card-title" style={{ textTransform: 'uppercase' }}>{pokemons.name}</h2>

          <div className="card-actions">
            <PokemonDetails pokemon={pokemons} />
          </div>
        </div>
      </div> */}

      {/* --------------------------------------------------------------------------- */}

      <div class="card flex justify-center align-middle w-52">
        <div class="wrapper shadow-xl shadow-zinc-400/75 rounded-xl">
          <img
            src={pokemons.sprites.other.dream_world.front_default}
            class="object-contain h-full p-5"
          />
          <p className="text-sm text-center -mt-10 block lg:hidden md:hidden">
            click or hover for more details
          </p>
        </div>

        <div class="character">
          <img
            src={pokemons.sprites.other.dream_world.front_default}
            className="w-svw"
          />
          <h2
            className="card-title title text-center justify-center"
            style={{ textTransform: "uppercase" }}
          >
            {pokemons.name}
          </h2>
          <div className="card-body items-center p-0">
            <div className="card-actions">
              <PokemonDetails pokemon={pokemons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedPokemonCard;
