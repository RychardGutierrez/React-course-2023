import { WINNER_COMBOS } from '../utils/constants';

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    [];
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // this should be return x // o
    }
  }

  return null;
};

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null);
};
