import { CHARACTERS, board } from "./constants/constants";
export const saveGameStorage = ({board, turn}) => {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('turn', turn);
}
export const startGameStorage = () => {
    const gameFromStorage = JSON.parse(window.localStorage.getItem('board'));
    return gameFromStorage ? gameFromStorage : board;
}
export const startTurnStorage = () => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? turnFromStorage : CHARACTERS.X
}
export const resetGameStorage = () => {
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
}