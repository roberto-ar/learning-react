import { Cell } from "./Cell";

export function WinnerModal({winner, resetGame}) {
    if(winner == null) return null;
    const textWinner = winner === false ? 'Empate' : 'Ganó: ';
    return(
        <section className="winner">

        <div className="text">
          {textWinner}

          <header className="win">
            {winner && <Cell>{winner}</Cell>}
          </header>

          <footer>
            <button className="btn" onClick={resetGame}>Reiniciar juego</button>
          </footer>

        </div>
      </section>
    )
} 