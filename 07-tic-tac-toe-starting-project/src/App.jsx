import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);

  //const [activePlayer, setActiveState] = useState("X");
  //Vamos a eliminar este estado y vamos a trabajar con gameTurns

  /*
  const handleSelectSquare = () => {
    setActiveState((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  };
  se reemplaza abajo por una función de actualización de estado que asegura
  que actualizemos el estado de una manera inmutable y que no estemos 
  fusionando diferentes estados
  */
  const activePlayer = deriveActivePlayer(gameTurns);
  const handleSelectSquare = (rowIndex, colIndex) => {
    //utilizamos abajo una forma de actualizar el estado actual con el estado anterior
    //eliminamos la siguiente linea porque eliminarmos el estado activePlayer
    //setActiveState((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    //y lo reemplazamos por un valor derivado
for (const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol  
  const secondSquareSymbol  
  const thirdSquareSymbol
}
    //Aquí abajo también actualizamos el estado actual utilizando el estado anterior
    //que en este caso es un array. Este método está indicado por React para arrays
    //NOTA: Las funciones de cambio de estado, en forma automática, pasan
    //como parámetro el estado que tienen en ese momento cuando utilizamos
    //una función flecha
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
