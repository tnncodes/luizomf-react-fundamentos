import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';

const Button = () => {
  const thecontext = useContext(GlobalContext);
  const {
    state: { counter },
    state,
    setState,
  } = thecontext;

  return (
    <button
      type="button"
      onClick={() => setState({ ...state, counter: counter + 1 })}
    >
      read more
    </button>
  );
};

export default Button;
