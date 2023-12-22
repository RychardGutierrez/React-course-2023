import { useState } from 'react';
import confetti from 'canvas-confetti';

import { TURNS } from './utils/constants';
import { checkEndGame, checkWinner } from './logic/board';
import WinnerModal from './components/WinnerModal';

import './App.css';
import Board from './components/Board';
import TurnSquare from './components/TurnSquare';
import { getLocalStorage, setLocalStorage } from './storage';

function App() {
  // Array(9).fill(null)
  const [board, setBoard] = useState(() => {
    const boardFormStorage = getLocalStorage('board');
    const initState = boardFormStorage ? boardFormStorage : Array(9).fill(null);

    return initState;
  });
  const [turn, setTurn] = useState(() => {
    const turnFormStorage = getLocalStorage('turn');
    const initState = turnFormStorage ?? TURNS.x;
    return initState;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    // Save status game in localStorage
    setLocalStorage('board', newBoard);
    setLocalStorage('turn', newTurn);

    //check if we have winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      return confetti();
    }

    if (checkEndGame(newBoard)) {
      return setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}>Reset Game</button>

      <Board board={board} updateBoard={updateBoard} />

      <TurnSquare turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
