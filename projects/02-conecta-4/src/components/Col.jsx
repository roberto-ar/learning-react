import { Cell } from "./Cell"

export const Col = ({ col, index, availableCell, updateBoard }) => {
    const handleClick = () =>{
        updateBoard(index, availableCell);
    }
    return (
        <div className="col" onClick={handleClick}>
            {col.map((cell, cellIndex) => {
                return (
                    <Cell key={`${index}-${cellIndex}`}
                    className={availableCell === cellIndex ? "cell available" : "cell"}>
                        {cell}
                    </Cell>
                )
            })}
        </div>
    )

}

//en el juego las primeras columnas se muestras hasta arriba, o sea la primera columna esta a la izquierda arriba, quiero que este a la izquierda abajo y así las primeras siempre esten abajo, puedes modoficarlo con css?