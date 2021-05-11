import Information from "./Information";

const NewButton = ({ turn, win, handleNewGame }) => {
  return (
    <div>
      <Information label={"Next Turn: "} value={turn}/>
      <button className="New" onClick={handleNewGame}>
        Nueva partida
      </button>
      <Information label={"Ganador: "} value={win}/>
    </div>
  );
};
export default NewButton;
