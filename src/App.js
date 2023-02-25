import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWord, makeGuess, incrementWrongGuesses, resetGame } from './store/store';
import HelpBtn from './components/HelpBtn'

// App function
function App() {
  const [guess, setGuess] = useState('');
  const word = useSelector(state => state.word);
  const guesses = useSelector(state => state.guesses);
  const maxWrongGuesses = useSelector(state => state.maxWrongGuesses);
  const wrongGuesses = useSelector(state => state.wrongGuesses);
  const dispatch = useDispatch();

// handleGuess function 
function handleGuess(e) {
  e.preventDefault();
  if (guess && !guesses.includes(guess)) {
    dispatch(makeGuess(guess));
    if (!word.includes(guess)) {
      dispatch(incrementWrongGuesses());
    }
  }
  setGuess('');
}
  // function hadleStartGame
  function handleStartGame() {
    dispatch(resetGame())
    const words = ['apple', 'banana', 'cherry', 'durian', 'elderberry', 'fig', 'grape', 'honeydew'];
    const randomIndex = Math.floor(Math.random() * words.length);
    dispatch(setWord(words[randomIndex]));
  }

  // function getDisplayWord
  function getDisplayWord() {
    return word.split('').map(letter => guesses.includes(letter) ? letter : '_');
  }

  // function getGAmeState
  function getGameState() {
    if (getDisplayWord().join('') === word) {
      return 'win';
    } else if (wrongGuesses >= maxWrongGuesses) {
      return 'lose';
    } else {
      return 'playing';
    }
  }

  // jsx return
  return (
    <div className="App">
      <h3>Hangman</h3>
      {word ? (
        <div className="innerBox">
          <p>{getDisplayWord().join(' ')}</p>
          {getGameState() === 'playing' && (
            <>
              <p>Wrong guesses: {wrongGuesses}</p>
              <form onSubmit={handleGuess}>
                <label>
                  Guess a letter:
                  <input type="text" value={guess} onChange={e => setGuess(e.target.value)} maxLength={1} />
                </label>
                <button type="submit">Guess</button>
              </form>
            </>
          )}
          {getGameState() === 'win' && (
            <>
              <p>You win!</p>
              <button onClick={handleStartGame}>Play again</button>
            </>
          )}
          {getGameState() === 'lose' && (
            <>
              <p>You lose! The word was "{word}".</p>
              <button onClick={handleStartGame}>Play again</button>
            </>
          )}
        </div>
      ) : (
        <button onClick={handleStartGame}>Start game</button>
      )}
      <HelpBtn id="helpBtn"/>
    </div>
  );
}

export default App;