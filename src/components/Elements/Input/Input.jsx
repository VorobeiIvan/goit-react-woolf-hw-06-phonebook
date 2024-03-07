import './Input.css';
const Input = InputProps => {
  const { type, name, value, placeholder, pattern, title, onChange } =
    InputProps;
  return (
    <div className="wrapper">
      <label className="label">{name}</label>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        required
      />
    </div>
  );
};

export default Input;
