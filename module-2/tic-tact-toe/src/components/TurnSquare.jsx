import { TURNS } from '../utils/constants';
import Square from './Square';

const TurnSquare = ({ turn }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
    </section>
  );
};

export default TurnSquare;
