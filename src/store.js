import { createStore } from 'redux';

const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(''),
};

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function checkWinner(field) {
  return WIN_PATTERNS.some(pattern => {
    const [a, b, c] = pattern;
    return field[a] && field[a] === field[b] && field[a] === field[c];
  });
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'MAKE_MOVE': {
      const { index } = action.payload;
      if (state.field[index] || state.isGameEnded) return state;
      const newField = [...state.field];
      newField[index] = state.currentPlayer;
      if (checkWinner(newField)) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
        };
      }
      if (!newField.includes('')) {
        return {
          ...state,
          field: newField,
          isDraw: true,
        };
      }
      return {
        ...state,
        field: newField,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
}

export const store = createStore(rootReducer); 