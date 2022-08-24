import { useEffect, useMemo, useState } from 'react';
import Post from './Post';

// Exemplo 2: LoadPosts + Post

const LoadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="posts">
        {useMemo(
          () => posts.map((post) => <Post key={post.id} post={post} />),
          [posts]
        )}
      </div>
    </>
  );
};

export default LoadPosts;
