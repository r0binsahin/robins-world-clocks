import { ClockType } from '../../models/Clock';

import styles from './board.module.scss';
import { Clock } from '../clock/Clock';

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
