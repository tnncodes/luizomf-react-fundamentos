import { memo } from 'react';

function ButtonIncrement({ increment }) {
  console.log('[+] Increment renderizou');
  return (
    <button 
    type="button" 
    onClick={() => increment(5)}
    >
      +
    </button>
  )
};

export default memo(ButtonIncrement);