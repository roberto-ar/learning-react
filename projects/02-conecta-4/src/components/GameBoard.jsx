import { Col } from "./Col"
export const GameBoard = ({ GameBoard, AvailableCells, updateBoard }) => {
    return (
        <div className="game-board">
            {GameBoard.map((col, colIndex) => {
                return (
                    <Col 
                    col={col}
                    index={colIndex} 
                    key={colIndex} 
                    availableCell={AvailableCells[colIndex]}
                    updateBoard={updateBoard}
                    />
                )
            })}
        </div>
    )
}