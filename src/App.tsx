import { Board } from './components/board/Board';

import './app.scss';
import { useEffect, useState } from 'react';
import { ClockType } from './models/Clock';

function App() {
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
    localStorage.setItem('clocks', JSON.stringify(clocks));
  }, [clocks]);
  return (
    <div className='app-wrapper'>
      <h1 className='title'>World Clocks</h1>
      <Board clocks={clocks} />
      <div className='input-box'>
        <input
          type='text'
          placeholder='City'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type='text'
          placeholder='Timezone'
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
        <button onClick={addClock}>Add Clock</button>
      </div>
    </div>
  );
}

export default App;
