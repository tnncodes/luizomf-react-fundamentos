import { useEffect, useMemo, useState } from 'react';
import PostItem from './PostItem';

const ExFourUseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('ExFourUseMemo PAI -> renderizando');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <article>
      <h2>useMemo</h2>
      <p>É um hook que utiliza uma técnica chamada memoization. Esse hook recebe 2 parâmetros: a função que deseja memoizar e um array de variáveis que, quando alteradas, atualizam a função.</p>

      <h3>Exemplo:</h3>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        {/* Exemplo com useMemo */}
        {useMemo(
          () => posts.splice(0, 3).map((post) => <PostItem key={post.id} post={post} />),
          [posts]
        )}

        {/* Exemplo sem useMemo */}
        {/* {posts.map((post) => <Post key={post.id} post={post} />)} */}
      </div>
    </article>
  );
};

export default ExFourUseMemo;
