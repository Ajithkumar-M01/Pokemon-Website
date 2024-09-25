import pokemonTitle from "../assets/pokemon.png";
import Timeline from "../components/Timeline";
import PokeTeam from "../assets/pokeTeam.jpg";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      {/* <img src={pokemonTitle} alt="pokemon" className="w-1/3 mx-auto " /> */}
      <img
        src={PokeTeam}
        alt="pokemon tean"
        className="w-3/4 lg:w-2/3 mx-auto rounded-xl mt-5"
      />
      <div className="bg-zinc-800 text-center text-3xl md:text-5xl lg:text-5xl mx-auto rounded-full my-3 w-3/4 md:w-1/2 lg:w-1/2 py-2 md:py-5 lg:py-5">
        <motion.span
          animate={{
            backgroundPositionX: "-100%",
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            duration: 1,
          }}
          className="bg-[linear-gradient(to_left,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium lg:font-bold md:font-bold"
        >
          Evolution of Pokemon
        </motion.span>
      </div>
      <Timeline />
    </div>
  );
};

export default HomePage;
