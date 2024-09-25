import PokemonDetails from "./PokemonDetails";

const SearchedPokemonCard = ({ pokemons }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl cardFlex" key={pokemons.id}>
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
      </div>
    </div>
  );
};

export default SearchedPokemonCard;
