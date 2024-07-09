import { useState } from 'react';

interface ClockProps {
  location: string;
  timezone: string;
}

export const Clock = ({ location, timezone }: ClockProps) => {
  const initialTime = new Date().toLocaleString('sv', { timeZone: timezone });

  console.log(initialTime);

  const [time, setTime] = useState(initialTime);

  return (
    <div>
      <h3>{location}</h3>
      <p>{time}</p>
    </div>
  );
};
