import { useEffect, useState } from 'react'
import { CHARACTERS, board } from './constants/constants.js'
import './App.css'
import { GameBoard } from './components/GameBoard.jsx'
import { Players } from './components/Players.jsx'
import { isWinner, isTie } from './logic.js'
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
    <div className="GameWrapper">
      <h1>Conecta 4</h1>
      <>
      <GameBoard 
      GameBoard={gameBoard} 
      updateBoard={updateBoard}
      AvailableCells={availableCells}
      />

      <Players Players={CHARACTERS} Turn={turn}/>
    </>
    </div>
  )
}

export default App
