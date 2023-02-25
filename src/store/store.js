import { createStore } from 'redux';

// Define initial state
const initialState = {
  word: '',
  guesses: [],
  maxWrongGuesses: 6,
  wrongGuesses: 0,
};

// Define action types
const SET_WORD = 'SET_WORD';
const MAKE_GUESS = 'MAKE_GUESS';
const INCREMENT_WRONG_GUESSES = 'INCREMENT_WRONG_GUESSES';
const RESET_GAME = 'RESET_GAME';

// Define action creators
export function setWord(word) {
  return { type: SET_WORD, payload: word };
}

export function makeGuess(letter) {
  return { type: MAKE_GUESS, payload: letter };
}

export function incrementWrongGuesses() {
  return { type: INCREMENT_WRONG_GUESSES };
}

export function resetGame() {
    return { type: RESET_GAME };
  }

// Define reducer function
function hangmanReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORD:
      return { ...state, word: action.payload };
    case MAKE_GUESS:
      return { ...state, guesses: [...state.guesses, action.payload] };
    case INCREMENT_WRONG_GUESSES:
      return { ...state, wrongGuesses: state.wrongGuesses + 1 };
    case RESET_GAME:
        return {...state, word: '', guesses: [], wrongGuesses: 0 };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(hangmanReducer);

export default store;

