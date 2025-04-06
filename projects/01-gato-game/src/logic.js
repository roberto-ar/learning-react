import { WINNER_COMBOS } from "./constants.js";
export {isEmpaty, isWinner};

const isEmpaty = (board) => board.every((square) => square != null);

const isWinner = ({board}) => {
    const newWinner = WINNER_COMBOS.map(combo => {
      const [a, b, c] = combo;
      if(
        board[a] 
        && board[a] === board[b]
        && board[a] === board[c]
      ){
        return {
          winner: board[a],
          combo
        }
      }
    })
    return newWinner.find(winner => winner != null);
  }