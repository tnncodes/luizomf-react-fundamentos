import { useCallback, useState } from 'react';
import Button from './Button';

export const UseCallBack = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  // console.log('Pai, renderizou');

  return (
    <>
      <h2>Contador: {counter}</h2>
      <Button incrementCounter={incrementCounter} />
    </>
  );
};
