import { Square } from './Square.jsx'
export function WinnerModal({winner, resetGame}) {
    if(winner == null) return null;
    const textWinner = winner === false ? 'Empate' : 'Ganó: ';
    return(
        <section className="winner">

        <div className="text">
          {textWinner}

          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>Reiniciar juego</button>
          </footer>

        </div>
      </section>
    )
} 