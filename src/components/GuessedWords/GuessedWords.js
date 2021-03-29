import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords({guessedWords}) {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 && (
        <span data-test="guess-instructions">
          Try to guess the secret word.
        </span>
      )}
      {guessedWords.length > 0 && (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Letters matching</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => {
              return (
              <tr data-test="guessed-word" key={index}><td data-test="guessed-word-number">{index+1}</td><td>{word.guessedWord}</td><td>{word.letterMatchCount}</td></tr>
                )
              })}
            </tbody>
          </table>
          <h1 data-test="total-guesses">Total Guesses: {guessedWords.length}</h1>
        </div>
      )}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;