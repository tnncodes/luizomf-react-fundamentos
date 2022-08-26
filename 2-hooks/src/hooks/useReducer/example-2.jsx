/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable default-case */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// data.js
export const globalState = {
  title: 'What is Lorem Ipsum?',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ALTERAR': {
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: 'ALTERAR', payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

// Title/index.jsx
export const Title = () => {
  const context = useContext(Context);
  return (
    <h2 onClick={() => context.changeTitle('Um texto enviado pela função')}>
      {context.state.title}
    </h2>
  );
};

// App.jsx
const App = () => {
  return (
    <AppContext>
      <div>
        <Title />
      </div>
    </AppContext>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

export default App;
