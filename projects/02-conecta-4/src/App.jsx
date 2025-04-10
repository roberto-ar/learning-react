import { useEffect, useState } from 'react'
import { CHARACTERS, board } from './constants/constants.js'
import './App.css'
import { GameBoard } from './components/GameBoard.jsx'
import { Players } from './components/Players.jsx'
import { isWinner, isTie } from './logic.js'
import { WinnerModal } from './components/WinnerModal.jsx'
//const newBoard = gameBoard.map(row => [...row]);

function App() {
  const [gameBoard, setGameBoard] = useState(board)
  const [availableCells, setAvailableCells] = useState([0,0,0,0,0,0,0])
  const [turn, setTurn] = useState(CHARACTERS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (col, availableCell) => {
    if(availableCell == null) return null;
    const newBoard = gameBoard.map(row => [...row]);
    newBoard[col][availableCell] = turn;
    setTurn(turn == CHARACTERS.X ? CHARACTERS.O : CHARACTERS.X);
    setGameBoard(newBoard);
  }
  const resetGame = ()=>{
    setTurn(CHARACTERS.X);
    setGameBoard(board);
    setWinner(null);
  }

  useEffect(()=>{
    console.log(winner);
  }, [winner]);
  
  useEffect(() =>{
    const newWinner = isWinner({board : gameBoard.flat()});
    if(newWinner) setWinner(newWinner)

    if(newWinner == null){
    const tie = isTie({board : gameBoard.flat()});
    if(tie) setWinner(false);
    }
  }, [gameBoard])

  useEffect(() => { //set available cell
    const cellsAvailable = gameBoard.map((col) => {
      let available = col.findIndex(cell => cell != null)
      if (available === -1) {
        return 5
      }
      if (available == 0){
        return null;
      }
      available--
      return available
    });
    setAvailableCells(cellsAvailable);
  }, [gameBoard])

  
  return (
    <main className="GameWrapper">
      <h1>Conecta 4</h1>
      <button className="btn" onClick={resetGame}>Reset Game</button>
      
      <GameBoard 
      GameBoard={gameBoard} 
      updateBoard={updateBoard}
      AvailableCells={availableCells}
      />

      <Players Players={CHARACTERS} Turn={turn}/>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
