import React, { useEffect, useState } from 'react';
import GameLayout from './GameLayout';
import Information from './Information';
import Field from './Field';
import { store } from '../store';

const Game = () => {
  const [, setRerender] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setRerender(x => x + 1);
    });
    return unsubscribe;
  }, []);

  const state = store.getState();

  const handleClick = (index) => {
    store.dispatch({ type: 'MAKE_MOVE', payload: { index } });
  };

  const resetGame = () => {
    store.dispatch({ type: 'RESET_GAME' });
  };

  return (
    <GameLayout>
      <Information
        currentPlayer={state.currentPlayer}
        isGameEnded={state.isGameEnded}
        isDraw={state.isDraw}
      />
      <Field field={state.field} onCellClick={handleClick} />
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
