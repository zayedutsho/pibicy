const InputField = ({
  id,
  label,
  type,
  name,
  placeholder = "",
  value,
  onChange,
  required = true,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required={required}
    />
  </div>
);

export default InputField;
