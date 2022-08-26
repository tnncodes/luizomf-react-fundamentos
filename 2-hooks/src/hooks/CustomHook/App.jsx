import { useState } from 'react';
import useInterval from './hooks/useInterval';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useInterval(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <h2>Delay: {delay}</h2>

      <button type="button" onClick={() => setDelay((d) => d + incrementor)}>
        +{incrementor}
      </button>

      <button type="button" onClick={() => setDelay((d) => d - incrementor)}>
        -{incrementor}
      </button>

      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
};

export default App;
