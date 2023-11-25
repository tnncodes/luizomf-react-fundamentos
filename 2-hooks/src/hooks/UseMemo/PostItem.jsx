function PostItem({ post }) {
  console.log('ExFourUseMemo FILHO -> renderizando');
  return (
    <div key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItem;
