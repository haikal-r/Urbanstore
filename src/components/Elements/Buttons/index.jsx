const Button  = (props) => {
    const { children, classname = "bg-black" } = props;
    return(
        <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="sumbit">
           {children}
        </button>
    )
}

export default Button;