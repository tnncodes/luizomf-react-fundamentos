import { useCallback, useEffect, useState } from 'react';

// Esse é um custon hook
const useAsync = (asyncFunction, shouldRun) => {
  // 1 - promise: no inicio - idle
  // 2 - promise: quando chama a função de callback - pending
  // 3 - promise: quando é resolvida - settled
  // 4 - promise: quando tem um erro - error

  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

export default useAsync;
