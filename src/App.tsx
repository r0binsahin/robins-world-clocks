import './App.css';
import { Board } from './components/board/Board';
import { Clock } from './components/clock/Clock';
import { ClockType } from './models/Clock';

function App() {
  const clocks: ClockType[] = [
    { timezone: 'Europe/Stockholm', location: 'Stockholm' },
    { timezone: 'Europe/London', location: 'London' },
  ];
  return (
    <>
      <h1 style={{ color: '#000' }}>World Clocks</h1>
      {clocks.map((clock, index) => (
        <Clock clock={clock} key={index} />
      ))}

      <Board clocks={clocks} />
    </>
  );
}

export default App;
