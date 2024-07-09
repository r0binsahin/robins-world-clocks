import { useEffect, useState } from 'react';
import { ClockType } from '../models/Clock';

interface ClockProps {
  clock: ClockType;
}

export const Clock = ({ clock }: ClockProps) => {
  const initialTime = new Date().toLocaleString('sv', {
    timeZone: clock.timezone,
  });

  console.log(initialTime);

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString('en-US', { timeZone: clock.timezone }));
    }, 1000);

    /*     return () => clearInterval(timer); */
  }, [clock.timezone]);

  return (
    <div>
      <h3>{clock.location}</h3>
      <p>{time}</p>
    </div>
  );
};
