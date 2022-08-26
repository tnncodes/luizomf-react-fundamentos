import { AppContext } from './contexts/App';
import Box from './components/Box';

const App = () => {
  return (
    <AppContext>
      <Box />
    </AppContext>
  );
};

export default App;
