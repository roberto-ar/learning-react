export const Players = ({Players, Turn}) => {
    return (
        <div>
            <div className={Turn == Players.X ? "Player isSelected" : "Player"}>{Players.X}</div>
            <div className={Turn == Players.O ? "Player isSelected" : "Player"}>{Players.O}</div>
        </div>
    )
}