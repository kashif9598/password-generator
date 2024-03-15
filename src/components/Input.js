const Input = ({
  type,
  value,
  className,
  placeholder,
  id,
  defaultChecked,
  onChange,
  min,
  max,
  readOnly,
  ref,
  label,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        id={id}
        defaultChecked={defaultChecked}
        onChange={onChange}
        min={min}
        max={max}
        readOnly={readOnly}
        ref={ref}
      />
      <label>{label}</label>
    </>
  );
};

export default Input;
