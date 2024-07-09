import { Board } from './components/board/Board';

import './app.scss';
import { useEffect, useState } from 'react';
import { ClockType } from './models/Clock';

function App() {
  const initialClocks = [
    { location: 'Stockholm', timezone: 'Europe/Stockholm' },
    { location: 'London', timezone: 'Europe/London' },
  ];
  const [clocks, setClocks] = useState<ClockType[]>(
    JSON.parse(localStorage.getItem('clocks') || '[]')
  );
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');

  const addClock = () => {
    setClocks([...clocks, { location, timezone }]);
    setLocation('');
    setTimezone('');
  };

  useEffect(() => {
    if (!localStorage.getItem('clocks')) {
      localStorage.setItem('clocks', JSON.stringify(initialClocks));
      setClocks(initialClocks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('clocks', JSON.stringify(clocks));
  }, [clocks]);
  return (
    <div className='app-wrapper'>
      <h1 className='title'>World Clocks</h1>
      <Board clocks={clocks} />
      <div className='input-box'>
        <h1>Add more cities</h1>
        <input
          type='text'
          placeholder='city'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type='text'
          placeholder='timezone'
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
        <button onClick={addClock}>Add Clock</button>
      </div>
    </div>
  );
}

export default App;
