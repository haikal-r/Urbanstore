const Input = (props) => {
  const { type, placeholder, name, onChange, value, ref } = props
  return (
    <input
      type={type}
      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-10"
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      ref={ref}
    />
  );
};

export default Input;
