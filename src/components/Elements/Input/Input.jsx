const Input = (props) => {
  const { type, placeholder, name } = props
  return (
    <input
      type={type}
      className="px-4 py-2 border w-full text-slate-700 placeholder: opacity-50 rounded text-sm"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
