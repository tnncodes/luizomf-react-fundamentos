import PropTypes from 'prop-types';

const Post = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  // eslint-disable-next-line react/require-default-props
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default Post;
