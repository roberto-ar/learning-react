import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { BoardGame } from './components/Board.jsx'
import { TURNS } from './constants.js'
import { isEmpaty, isWinner } from './logic.js'
import { WinnerModal } from './components/WinnerModal.jsx'

//componente principal
function App() {
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : TURNS.X;
  })

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });   

  const [winner, setWinner] = useState(null); 

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
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
    localStorage.setItem('board', JSON.stringify(newBoard));
    localStorage.setItem('turn', turn == TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  }

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
