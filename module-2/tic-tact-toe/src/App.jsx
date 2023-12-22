import { useState } from 'react';
import confetti from 'canvas-confetti';
import Square from './components/Square';
import { TURNS } from './utils/constants';
import { checkEndGame, checkWinner } from './logic/board';
import WinnerModal from './components/WinnerModal';

import './App.css';
import Board from './components/Board';

function App() {
  // Array(9).fill(null)
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
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

    //check if we have winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      return confetti();
    }

    if (checkEndGame(newBoard)) {
      return setWinner(false);
    }

    // Todo: check when the game is over
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}>Reset Game</button>
      
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
