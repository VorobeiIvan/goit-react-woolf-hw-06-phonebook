const Input = InputProps => {
  const { type, name, value, placeholder, pattern, title } = InputProps;
  return (
    <div className="wrapper">
      <label className="label">{name}</label>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        title={title}
        required
      />
    </div>
  );
};

export default Input;
