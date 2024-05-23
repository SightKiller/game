import React from 'react';

const Result = ({ secretNum, guess }) => {
  let result;
  if (guess) {
    if (guess > secretNum) {
      result = '🔼 Higher';
    } else if (guess < secretNum) {
      result = '🔽 Lower';
    } else if (guess === secretNum) {
      result = '🎉 Yipee! Correct';
    }
  }

  return (
    <div className="result">
      <span className={result === '🎉 Yipee! Correct' ? 'correct' : 'incorrect'}>
        Your guessed: {result}
      </span>
    </div>
  );
};

export default Result;
