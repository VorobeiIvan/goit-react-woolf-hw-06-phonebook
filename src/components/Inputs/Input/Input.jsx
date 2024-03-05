const Input = ({ inputProps }) => {
  const {
    label,
    className,
    type,
    name,
    value,
    onChange,
    pattern,
    title,
    required,
    placeholder,
  } = inputProps;

  return (
    <div className="wrapper">
      <label className="label">{label}</label>
      <input
        className={`input ${className}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
