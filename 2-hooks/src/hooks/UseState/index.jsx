import { useState } from "react";
import "./styles.css";

function ExOneUseState() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  }

  return (
    <article className="exOneUseState">
      <h2>useState</h2>
      <p>É um Hook que permite adicionar o state do React a um componente de função, como string, object, array, boolean, number, null.</p>
      <p>Tem a mesma função do this.state em um antigo Class Componentes do React.</p>
      <p>Pode-se definir seu valor passando um valor direto ou uma função que acessa seu valor atual e retornando um novo.</p>

      <h3>Exemplo:</h3>
      <button 
        type="button" 
        onClick={handleClick}
      >
        {status ? 'ON' : 'OFF'}
      </button>
    </article>
  )
}

export default ExOneUseState;
