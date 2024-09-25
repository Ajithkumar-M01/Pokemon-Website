import PokemonTrainers from "./PokemonTrainers";
import pokeBall from "../assets/pokeball.png";

const RegionCard = ({ regionName }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {regionName.map((reg, index) => (
        <div key={index}>
          {Object.keys(reg).map((regName) => (
            <div className="card image-full w-64 shadow-xl bg-gradient-to-b from-zinc-800 to-zinc-200">
              {/* <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure> */}
              <div className="card-body">
                <h2 className="text-3xl text-center">{regName}</h2>
                {/* <h2 className="card-title text-center">{regName}</h2> */}


                {/* <p>add some details about region</p> */}
                <div className="card-actions justify-center">
                  <PokemonTrainers
                    trainerData={reg[regName]}
                    id={index}
                    regionName={regName}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RegionCard;
