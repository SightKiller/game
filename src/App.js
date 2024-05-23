import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
  const [guess, setGuess] = useState(null);

  function handleButtonClick(value) {
    setGuess(value);
  }

  return (
    <div className="container" style={
      {marginTop:320}
    }>
      <div className="head">
        <label htmlFor="term">Guess the number between 1 to 10!</label>
      </div>
      <div className="buttons">
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i + 1} onClick={() => handleButtonClick(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      {guess !== null && <Result secretNum={secretNum} guess={guess} />}
    </div>
  );
}

export default App;
