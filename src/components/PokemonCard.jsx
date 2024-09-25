import PokemonDetails from "./PokemonDetails";

const PokemonCard = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 gap-y-10">
      {pokemons.map((poke) => (
        <div className="card w-52 shadow-xl shadow-zinc-400/75 cardFlex" key={poke.id}>
          <figure className="px-10 pt-10">
            <img
              src={poke.sprites.other.dream_world.front_default}
              alt={poke.name}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{textTransform: 'uppercase'}}>{poke.name}</h2>

            <div className="card-actions">
              <PokemonDetails pokemon={poke} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
