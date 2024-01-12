const Label =  (props) => {
    const { htmlFor, children } = props
    return(
        <label htmlFor={htmlFor} className="block text-black font-medium text-sm mb-2">
            {children}
        </label>
    )
}

export default Label;