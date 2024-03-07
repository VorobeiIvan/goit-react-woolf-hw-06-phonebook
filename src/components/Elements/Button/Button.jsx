const Button = ({ onClick }, ButtonProps) => {
  const { type, className, nameButton } = ButtonProps;
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {nameButton}
    </button>
  );
};

export default Button;
