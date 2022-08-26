import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';

const Title = () => {
  const thecontext = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = thecontext;

  return (
    <h2>
      {title} - views: {counter}
    </h2>
  );
};

export default Title;
