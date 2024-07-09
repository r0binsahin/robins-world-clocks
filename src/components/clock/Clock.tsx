import { useEffect, useState } from 'react';
import { ClockType } from '../../models/Clock';
import styles from './clock.module.scss';

interface ClockProps {
  clock: ClockType;
}

export const Clock = ({ clock }: ClockProps) => {
  const initialTime = new Date().toLocaleString('sv', {
    timeZone: clock.timezone,
  });

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString('sv', { timeZone: clock.timezone }));
    }, 1000);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <h3 className={styles.title}>{clock.location}</h3>
      <p className={styles.time}>{time}</p>
    </div>
  );
};
