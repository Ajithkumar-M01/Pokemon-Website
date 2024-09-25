const PokemonTrainers = ({ trainerData, id, regionName }) => {
  const modalId = `modal_${id}`;

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Pokemon Trainers
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-slate-800">
          <h3 className="font-bold text-2xl  text-center my-2">
            Pokemon trainers of {regionName} region
          </h3>
          <ul>
            {trainerData.map((trainer, index) => (
              <>
                <h3 key={index} className="text-lg text-center">
                  {trainer.name}  
                  <span> ({trainer.bio})</span>
                </h3>
              </>
            ))}
          </ul>
          <div className="modal-action">
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

export default PokemonTrainers;
