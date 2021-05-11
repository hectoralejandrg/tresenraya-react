import Square from "./Square";

const Board = ({ tiles, handleClick, handleChange }) => {
  return (
    <div className="Board">
      <div className="Row">
        <Square
          pos={0}
          value={tiles[0]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
        <Square
          pos={1}
          value={tiles[1]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
        <Square
          pos={2}
          value={tiles[2]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
      </div>
      <div className="Row">
        <Square
          pos={3}
          value={tiles[3]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
        <Square
          pos={4}
          value={tiles[4]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
        <Square
          pos={5}
          value={tiles[5]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
      </div>
      <div className="Row">
        <Square
          pos={6}
          value={tiles[6]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
        <Square
          pos={7}
          value={tiles[7]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
        <Square
          pos={8}
          value={tiles[8]}
          handleOnClick={handleClick}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Board;
