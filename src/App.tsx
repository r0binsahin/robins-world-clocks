import { Board } from './components/board/Board';

import styles from './app.module.scss';
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
    <div className={styles.appWrapper}>
      <h1>World Clocks</h1>
      <Board clocks={clocks} />
      <div>
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
