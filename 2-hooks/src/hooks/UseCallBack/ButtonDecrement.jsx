import { memo } from 'react';

function ButtonDecrement({ decrement }) {
  console.log('[-] Decrement renderizou');
  return (
    <button 
    type="button" 
    onClick={() => decrement(5)}
    >
      -
    </button>
  )
};

export default memo(ButtonDecrement);