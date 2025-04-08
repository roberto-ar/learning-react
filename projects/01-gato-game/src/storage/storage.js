import { TURNS } from "../constants.js";

export const startGameStorage = () =>{
     const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
}
export const startTurnStorage = () => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : TURNS.X;
}

export const resetGameStorage = () => {
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
}

export const saveGameStorage = ({board, turn}) => {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('turn', turn == TURNS.X ? TURNS.O : TURNS.X);
}