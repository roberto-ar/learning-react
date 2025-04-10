import WINNER_COMBOS from './constants/winning_combos_connect4.json'
export const isWinner = ({board}) =>{
    const newWinner = WINNER_COMBOS.map(combo =>{
        const [a, b, c, d] = combo;
        if(
            board[a] &&
            board[a] == board[b] &&
            board[a] == board[c] &&
            board[a] == board[d] 
        ){
            console.log(board);
            console.log(a,b,c,d);
            return board[a];
        } 
    })
    return newWinner.find(winner => winner != null);
}
export const isTie = ({board}) =>{
    const tie = board.findIndex(cell => cell == null);
    if(tie == -1) return true
}