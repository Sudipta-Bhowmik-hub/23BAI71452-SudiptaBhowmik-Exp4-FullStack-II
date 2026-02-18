import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Square from "../components/Square";

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Simple AI: pick first empty square
function machineMove(squares) {
  const emptyIndex = squares.findIndex(val => val === null);
  return emptyIndex !== -1 ? emptyIndex : null;
}

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);   // ✅ track winner
  const { dispatch } = useContext(AppContext);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const newSquares = squares.slice();
    newSquares[i] = "X"; // player always X
    setSquares(newSquares);
    setXIsNext(false); // switch turn to machine
  }

  useEffect(() => {
    const gameWinner = calculateWinner(squares);
    if (gameWinner) {
      setWinner(gameWinner); // ✅ store winner
      dispatch({ type: "INCREMENT_GAMES" });
      if (gameWinner === "X") dispatch({ type: "X_WIN" });
      if (gameWinner === "O") dispatch({ type: "O_WIN" });
      return;
    }

    // Machine plays automatically
    if (!xIsNext && !winner) {
      const move = machineMove(squares);
      if (move !== null) {
        const newSquares = squares.slice();
        newSquares[move] = "O";
        setSquares(newSquares);
        setXIsNext(true); // back to player
      }
    }
  }, [squares, xIsNext, winner, dispatch]);

  return (
    <div className="board-container">
      <div className="board">
        {squares.map((val, i) => (
          <Square key={i} value={val} onClick={() => handleClick(i)} />
        ))}
      </div>

      {/* ✅ Winner display below board */}
      {winner && (
        <p className="status-text">
          🎉 Winner is: {winner}
        </p>
      )}
    </div>
  );
}
