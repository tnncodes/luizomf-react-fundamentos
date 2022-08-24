import { useCallback, useMemo, useState } from 'react';
import Button from './Button';

// Exemplo 1: Counter + Button

export const UseMemo = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  console.log('Pai, renderizou');

  return (
    <>
      <h2>Contador: {counter}</h2>
      {useMemo(() => {
        return <Button incrementCounter={incrementCounter} />;
      }, [incrementCounter])}
    </>
  );
};
