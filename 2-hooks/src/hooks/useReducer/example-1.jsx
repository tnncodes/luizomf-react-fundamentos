import { useReducer } from 'react';

const globalState = {
  title: 'What is Lorem Ipsum?',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'alterar': {
      return { ...state, title: 'alterou' };
    }

    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  return { ...state };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h2>
        {title} {counter}
      </h2>
      <button type="button" onClick={() => dispatch({ type: 'alterar' })}>
        Alterar
      </button>
      <button type="button" onClick={() => dispatch({ type: 'inverter' })}>
        Inverter
      </button>
    </div>
  );
};

export default App;
