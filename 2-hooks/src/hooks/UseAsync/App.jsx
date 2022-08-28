import { useEffect } from 'react';
import useAsync from './index';

// esse é um exemplo de uso do hook

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

const App = () => {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);
  console.log('error', error);

  useEffect(() => {
    reFetchData();
  }, [reFetchData]);

  if (status === 'idle') {
    return <pre>idle: Nada Executando</pre>;
  }

  if (status === 'pending') {
    return <pre>error: {status.message}</pre>;
  }

  if (status === 'settled') {
    return <pre>settled: {JSON.stringify(result, null, 2)}</pre>;
  }

  return 'Oi';
};

export default App;
