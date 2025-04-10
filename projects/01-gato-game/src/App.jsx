import { useState, useEffect } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { BoardGame } from './components/Board.jsx'
import { TURNS } from './constants.js'
import { isEmpaty, isWinner } from './logic.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { startGameStorage, startTurnStorage, resetGameStorage, saveGameStorage } from './storage/storage.js'

//componente principal
function App() {
  const [turn, setTurn] = useState(() => {
    return startTurnStorage();
  })

  const [board, setBoard] = useState(() => {
    return startGameStorage();
  });   

  const [winner, setWinner] = useState(null); 

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    resetGameStorage();
    setWinner(null);
    setTurn(TURNS.X);
  }

  const updateBoard = (index) => {
    if(board[index]) return; 
    if(winner != null) return; 

    const newBoard = [...board];  
    newBoard[index] = turn;

    const newWinner = isWinner({board: newBoard}); 
    if(newWinner) {  
      setWinner(newWinner.winner);
      confetti();
    }
    else if(isEmpaty(newBoard)) {
      console.log('El juego ha terminado en empate');
      setWinner(false);
    }
    saveGameStorage({board: newBoard, turn});
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  }
  useEffect(() =>{
    console.log("XD")
  })

  return (
    <main className='board'>
      <h1>Juego del gato</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className="game">
      <BoardGame updateBoard={updateBoard} board={board} />
      </section>
      
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
