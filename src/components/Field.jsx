import React, { useEffect, useState } from 'react';
import FieldLayout from './FieldLayout';
import { store } from '../store';

const Field = () => {
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

  return <FieldLayout field={state.field} onCellClick={handleClick} />;
};

export default Field;
