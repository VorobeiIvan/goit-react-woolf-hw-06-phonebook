const Button = ButtonProps => {
  const { type, className, nameButton } = ButtonProps;
  return (
    <button className={`btn ${className}`} type={type}>
      {nameButton}
    </button>
  );
};

export default Button;
