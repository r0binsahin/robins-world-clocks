import './App.css';
import { Board } from './components/board/Board';
import { ClockType } from './models/Clock';

function App() {
  const clocks: ClockType[] = [
    { timezone: 'Europe/Stockholm', location: 'Stockholm' },
    { timezone: 'Europe/London', location: 'London' },
  ];
  return (
    <>
      <Board clocks={clocks} />
    </>
  );
}

export default App;
