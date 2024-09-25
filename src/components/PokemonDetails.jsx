const PokemonDetails = ({ pokemon }) => {
  const modalId = `modal_${pokemon.id}`;
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        more details
      </button>
      <dialog
        id={modalId}
        className="modal modal-bottom sm:modal-middle"
        key={pokemon.id}
      >
        <div className="modal-box">
          <h3 className="font-bold text-3xl uppercase h-1/5 mb-5">{pokemon.name}</h3>
          <div className="flex gap-2" style={{height:'70%'}}>
            <div className="bg-zinc-700 text-zinc-100 w-1/5 rounded-xl py-7">
              {/* arrange the p tags to appear middle */}
              <p className="font-bold text-lg">Height</p>
              <p>{pokemon.height}0 cm</p>
            </div>

            <div className="bg-red-600 w-3/5 rounded-xl p-5">
            <h4 className="font-bold text-xl text-zinc-100">Abilities</h4>
            <ul>
              {pokemon.abilities.map((a) => (
                <li key={a.ability.name} className="text-zinc-100">{a.ability.name}</li>
              ))}
            </ul>
            </div>
            <div className="bg-zinc-700 text-zinc-100 w-1/5 rounded-xl py-7">
              <p className="font-bold text-lg">Weight</p>
              <p>{pokemon.weight / 10} Kg</p>
            </div>
          </div>
          <div className="modal-action" style={{ height: "10%"}}>
            <p className="py-4 text-sm text-center">
              Press ESC key or click the button below to close
            </p>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PokemonDetails;
