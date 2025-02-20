import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActiveState] = useState("X");

  /*
  const handleSelectSquare = () => {
    setActiveState((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  };
  se reemplaza abajo por una función de actualización de estado que asegura
  que actualizemos el estado de una manera inmutable y que no estemos 
  fusionando diferentes estados
  */

  const handleSelectSquare = (rowIndex, colIndex) => {
    //utilizamos abajo una forma de actualizar el estado actual con el estado anterior
    setActiveState((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    //Aquí abajo también actualizamos el estado actual utilizando el estado anterior
    //que en este caso es un array. Este método está indicado por React para arrays
    //NOTA: Las funciones de cambio de estado, en forma automática, pasan
    //como parámetro el estado que tienen en ese momento cuando utilizamos
    //una función flecha
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log />
    </main>
  );
};

export default App;
