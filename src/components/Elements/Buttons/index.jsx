const Button = (props) => {
  const { children, classname = "bg-white", onClick = () => {}, type= "button" } = props;
  return (
    <button
      className={`rounded-3xl px-[12px] h-9 ${classname} text-black border`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
