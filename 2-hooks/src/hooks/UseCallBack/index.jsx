import { useCallback, useState } from 'react';
import ButtonIncrement from './ButtonIncrement';
import ButtonDecrement from './ButtonDecrement';

function ExThreeUseCallBack() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const decrement = useCallback((num) => {
    setCounter((c) => c - num);
  }, []);

  console.log('Pai renderizou');

  return (
    <article>
      <h2>useCallback</h2>
      <p>É um Hook que permite armazenar em cache uma definição de função entre re-renderizações e otimizar o código.</p>
      <p>Recebe dois parâmetros, uma função callback e um array de dependências. O seu retorno é uma versão memoizada da função callback recebida como primeiro parâmetro.</p>

      <h3>Exemplo:</h3>
      <p>Contador: {counter}</p>
      <ButtonIncrement increment={increment} />
      <ButtonDecrement decrement={decrement} />
    </article>
  );
};

export default ExThreeUseCallBack;
