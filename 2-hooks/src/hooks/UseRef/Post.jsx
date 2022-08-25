/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h2 onClick={() => handleClick(post.title)}>{post.title}</h2>
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
  handleClick: PropTypes.func.isRequired,
};

export default Post;
