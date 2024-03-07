import './Button.css';
const Button = ({ onClick, disabled, ...ButtonProps }) => {
  const { type, className, nameButton } = ButtonProps;
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {nameButton}
    </button>
  );
};

export default Button;
