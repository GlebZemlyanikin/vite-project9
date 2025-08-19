import React from 'react';
import GameLayout from './GameLayout';
import Information from './Information';
import Field from './Field';
import { store } from '../store';

const Game = () => {
  const resetGame = () => {
    store.dispatch({ type: 'RESET_GAME' });
  };

  return (
    <GameLayout>
      <Information />
      <Field />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <button
          style={{ padding: '10px 10px', fontSize: '16px', cursor: 'pointer' }}
          onClick={resetGame}
        >
          Начать заново
        </button>
      </div>
    </GameLayout>
  );
};

export default Game;
