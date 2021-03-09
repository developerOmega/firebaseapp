const Input = ({type = "text", placeholder="", name="", id="", value="", onChange = () => {return}}) => {
  return type !== "checkbox" ? (
    
    <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      id={id} 
      defaultValue={value}
      onChange={onChange}
    />


  ) : (
    <input 
      type={type} 
      name={name} 
      id={id} 
      defaultValue={value}
      defaultChecked={ value == 'true' ? "checked" : "" }  
      onChange={onChange}
    />
  );
}

export default Input
