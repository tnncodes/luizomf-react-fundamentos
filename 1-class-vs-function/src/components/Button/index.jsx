import PropTypes from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button
    className="button"
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
