import React, { useState } from 'react';

// help function
function HelpBtn() {
  const [showHelp, setShowHelp] = useState(false);

  function handleClick() {
    setShowHelp(!showHelp);
  }

  return (
    <>
      <button onClick={handleClick}>Help</button>
      {showHelp && (
        <div>
          <h2>How to Play Hangman</h2>
          <p>The goal of Hangman is to guess the hidden word before making too many incorrect guesses.</p>
          <p>At the start of the game, a word is chosen at random and represented by blank spaces for each letter in the word.</p>
          <p>You can guess a letter by typing it into the input field and clicking the "Guess" button. If the letter is in the word, it will be revealed in the corresponding blank space(s). If the letter is not in the word, the hangman drawing will progress towards completion.</p>
          <p>You can continue guessing letters until you either guess the word correctly or make too many incorrect guesses and lose the game.</p>
          <p>Good luck!</p>
        </div>
      )}
    </>
  );
}

export default HelpBtn;