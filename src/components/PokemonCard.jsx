import PokemonDetails from "./PokemonDetails";
import "./style.css";

const PokemonCard = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 gap-y-10">
      {pokemons.map((poke) => (
        // <div className="card w-52 shadow-xl shadow-zinc-400/75 cardFlex" key={poke.id}>
        //   <figure className="px-10 pt-10">
        //     <img
        //       src={poke.sprites.other.dream_world.front_default}
        //       alt={poke.name}
        //       className="rounded-xl"
        //     />
        //   </figure>
        //   <div className="card-body items-center text-center">
        //     <h2 className="card-title" style={{textTransform: 'uppercase'}}>{poke.name}</h2>

        //     <div className="card-actions">
        //       <PokemonDetails pokemon={poke} />
        //     </div>
        //   </div>
        // </div>

        // --------------------------------------------------------------------------

        <div class="card flex justify-center align-middle w-52">
          <div class="wrapper shadow-xl shadow-zinc-400/75 rounded-xl">
            <img
              src={poke.sprites.other.dream_world.front_default}
              class="object-contain h-full p-5"
            />
            <p className="text-sm text-center -mt-10 block lg:hidden md:hidden">
              click or hover for more details
            </p>
          </div>

          <div class="character">
            <img
              src={poke.sprites.other.dream_world.front_default}
              className="w-svw"
            />
            <h2
              className="card-title title text-center justify-center text-zinc-950"
              style={{ textTransform: "uppercase" }}
            >
              {poke.name}
            </h2>
            <div className="card-body items-center p-0">
              <div className="card-actions">
                <PokemonDetails pokemon={poke} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
