import { ClockType } from '../models/Clock';
import { Clock } from './Clock';

interface BoardProps {
  clocks: ClockType[];
}

export const Board = ({ clocks }: BoardProps) => {
  return (
    <>
      {clocks.map((clock, index) => (
        <Clock key={index} clock={clock} />
      ))}
    </>
  );
};
