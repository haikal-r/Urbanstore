import Input from "./Input";
import Label from "./Label";

const InputForm = ({ label, name, type, placeholder, onChange, value }, ref) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={ref}
      />
    </div>
  );
};

export default InputForm;
