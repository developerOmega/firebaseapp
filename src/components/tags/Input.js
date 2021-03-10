const Input = ({type = "text", className = "", placeholder="", name="", id="", value="", onChange = () => {return}}) => {
  return type !== "checkbox" ? (
    
    <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      id={id} 
      defaultValue={value}
      className={className}
      onChange={onChange}
    />


  ) : (
    <input 
      type={type} 
      name={name} 
      id={id} 
      className={className}
      defaultValue={value}
      defaultChecked={ value === 'true' ? "checked" : "" }  
      onChange={onChange}
    />
  );
}

export default Input
