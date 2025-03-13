/*
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
*/
const GameBoard = ({ onSelectSquare, board }) => {
  console.log("Estoy en gameboard", board)
  /*
  Ahora vamos a producir un estado derivado (o computado), gameBoard.
  gameBoard se deriva de algún estado -> gameTurns que tenemos en App
  y que hemos recibido una copia como prop llamada turns.
  Es decir, a gameTurns (de App) lo transformamos en gameBoard
  Y gameBoard no es otra cosa que el tablero de juego
  En definitiva, en gameTurns tenemos el juego completo
  y lo reconstruimos como gameBoard para renderizar
  
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
*/
  /*
  Manejamos lo que sigue en App -> queda este comentario como referencia
  
  const GameBoard = ({ onSlectedSquare, activePlayerSimbol }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {

    setGameBoard((prevGameBoard) => {
      //la siguiente técnica se utiliza para actualizar
      //estados que son arrays basados el estado anterior
      // -> se crea una copia del array original
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      // -> y se utiliza esa copia
      //para actualizar el estado
      updatedBoard[rowIndex][colIndex] = activePlayerSimbol;
      return updatedBoard;
    });

    onSlectedSquare()
  };
*/
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
