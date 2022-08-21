import { useState } from 'react';
import logo from './logo.svg';
import './styles.css';

export const UseState = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    // setCounter(counter + 1);

    // setState com callBack
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <section className="container">
      <h2>Cliques: {counter}</h2>
      <img src={logo} alt="React logo" className={`logo ${reverseClass}`} />
      <button className="button" type="button" onClick={handleClick}>
        toggle
      </button>
    </section>
  );
};
