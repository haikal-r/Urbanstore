const Button = (props) => {
  const { children, classname = "bg-white", onClick = () => {}, type= "button" } = props;
  return (
    <button
      className={`rounded-3xl px-[12px] h-10 font-semibold ${classname} text-black border hover:bg-slate-100 `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
