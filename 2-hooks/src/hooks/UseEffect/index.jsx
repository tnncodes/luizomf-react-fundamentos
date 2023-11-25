import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('btnEvent clicado!');
};

function ExTwoUseEffect () {
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
    document.querySelector('.btnEvent')?.addEventListener('click', eventFn);

    //
    return () => {
      document.querySelector('.btnEvent')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <article className="exTwoUseEffect">
      <h2>useEffect</h2>
      <p>É um Hook que serve para lidar com os efeitos.</p>
      <p>Podemos usá-los como os lifeCycles componentDidMount, componentDidUpdate e componentWillUnmount.</p>
      
      <h3>Exemplo:</h3>
      <p>Contador: {counter}</p>
      <button 
        type="button" 
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button 
        type="button" 
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <button type='button' className='btnEvent'>?</button>
    </article>
  );
};

export default ExTwoUseEffect;
