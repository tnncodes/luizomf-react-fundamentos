import { useEffect, useMemo, useRef, useState } from 'react';
import Post from './Post';

const LoadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  return (
    <>
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="posts">
        {useMemo(
          () =>
            posts.map((post) => (
              <Post key={post.id} post={post} handleClick={handleClick} />
            )),
          [posts]
        )}
      </div>
    </>
  );
};

export default LoadPosts;
