import { Square } from './Square.jsx'
export function BoardGame({board, updateBoard}) {
    const createBoard = board.map((square, index) =>{
        return (
          <Square
            updateBoard={updateBoard}
            key={index}
            index={index}>
              {square}
          </Square>
        )
      })
      return createBoard;
}