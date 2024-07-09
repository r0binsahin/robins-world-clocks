import { ClockType } from '../../models/Clock';

import styles from './board.module.scss';

interface BoardProps {
  clocks: ClockType[];
}

export const Board = ({ clocks }: BoardProps) => {
  return (
    <div className={styles.board}>
      <h1> Add a city to see the local time</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor='city'>City</label>
        <input type='text' placeholder='e.g. London' id='city' />
        <label htmlFor='timezone'>Time Zone</label>
        <input type='text' id='timezone' />
      </div>
    </div>
  );
};
