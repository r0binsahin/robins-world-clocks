import { useEffect, useState } from 'react';
import { ClockType } from '../../models/Clock';
import './clock.scss';

interface ClockProps {
  clock: ClockType;
}

export const Clock = ({ clock }: ClockProps) => {
  const initialTime = new Date().toLocaleTimeString('sv-SE', {
    timeZone: clock.timezone,
  });

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('sv-SE', { timeZone: clock.timezone })
      );
    }, 1000);
  }, []);

  return (
    <div className='clock-container'>
      <h3 className='title'>{clock.location}</h3>
      <p className='time'>{time}</p>
    </div>
  );
};
