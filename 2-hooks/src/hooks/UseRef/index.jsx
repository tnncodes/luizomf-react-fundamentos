import { useRef } from 'react';

function ExFiveUseRef() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    inputEl.current.focus();
  };

  return (
    <article>
      <h2>useRef</h2>
      <p>O useRef permite acessar um elemento do DOM e armazenar um valor imutável durante o ciclo de vida do componente.</p> 

      <p>  
      Atua como uma função que retorna um objeto ref e recebe um argumento que inicializa a propriedade .current desse objeto.</p>

      <h3>Exemplo:</h3>
      <input 
        ref={inputEl} 
        type="text" 
      />
      <button 
        type='button' 
        onClick={onButtonClick}
      >
        Pesquisar
      </button>
    </article>
  );
};

export default ExFiveUseRef;
