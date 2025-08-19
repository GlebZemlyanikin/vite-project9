import React, { useEffect, useState } from 'react';
import InformationLayout from './InformationLayout';
import { store } from '../store';

const Information = () => {
  const [, setRerender] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setRerender(x => x + 1);
    });
    return unsubscribe;
  }, []);

  const state = store.getState();

  let status = '';
  if (state.isDraw) status = 'Ничья';
  else if (state.isGameEnded) status = `Победа: ${state.currentPlayer}`;
  else status = `Ходит: ${state.currentPlayer}`;

  return <InformationLayout status={status} />;
};

export default Information;
