import PropTypes from 'prop-types';

const Button = ({ incrementCounter }) => {
  console.log('Filho, renderizou');

  return (
    <button type="button" onClick={() => incrementCounter(10)}>
      +
    </button>
  );
};

Button.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
};

export default Button;
