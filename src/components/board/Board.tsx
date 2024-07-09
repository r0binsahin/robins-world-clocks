import { ClockType } from '../../models/Clock';
import { Clock } from '../clock/Clock';
import styles from './board.module.scss';

interface BoardProps {
  clocks: ClockType[];
}

export const Board = ({ clocks }: BoardProps) => {
  return (
    <div className={styles.board}>
      {clocks.map((clock, index) => (
        <Clock key={index} clock={clock} />
      ))}
    </div>
  );
};
