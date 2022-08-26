import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';

const Description = () => {
  const thecontext = useContext(GlobalContext);
  const {
    state: { body },
  } = thecontext;

  return <p>{body}</p>;
};

export default Description;
