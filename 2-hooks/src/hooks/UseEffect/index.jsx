import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h2 clicado!');
};

export const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate: executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount: executa 1x
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // com dependência: executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('contador mudou para', counter);
  }, [counter]);

  // componentWillUmount - limpeza
  useEffect(() => {
    document.querySelector('h2')?.addEventListener('click', eventFn);

    //
    return () => {
      document.querySelector('h2')?.addEventListener('click', eventFn);
    };
  }, []);

  return (
    <>
      <h2>Contador: {counter}</h2>{' '}
      <button type="button" onClick={() => setCounter(counter + 1)}>
        button
      </button>
    </>
  );
};
