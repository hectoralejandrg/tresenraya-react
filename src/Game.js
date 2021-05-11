import { useState } from "react";
import Board from "./Board";
import NewButton from "./NewButton";
const calculateWinner = (board) => {
  const winnerPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winnerPositions.length; i++) {
    const [a, b, c] = winnerPositions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
};

const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [win, setWin] = useState("No hay");

  const handleClickBoard = (pos) => {
    const copy = Array.from(board);
    const winner = calculateWinner(board);
    if (winner) {
      return;
    }
    copy[pos] = isX ? "X" : "O";
    setBoard(copy);
    setIsX(!isX);
  };
  const handleNewGame = () => {
    setBoard(new Array(9).fill(null));
    setIsX(true);
    setWin("No hay");
  };
  const handleChange = () => {
    const winner = calculateWinner(board);
    if (winner) {
      setWin(!isX ? "X" : "O");
    }
  };
  return (
    <div>
      <Board
        tiles={board}
        handleClick={handleClickBoard}
        handleChange={handleChange}
      />
      <NewButton
        handleNewGame={handleNewGame}
        turn={isX ? "X" : "O"}
        win={win}
      />
    </div>
  );
};
export default Game;
