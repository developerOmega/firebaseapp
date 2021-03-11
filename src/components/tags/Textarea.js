const Textarea = ({ className = "", placeholder="", name="", id="", value="", onChange = () => {return}}) => {
  return (
    <textarea  
      placeholder={placeholder} 
      name={name} 
      id={id} 
      className={className}
      onChange={onChange}
      autoComplete="off"
      defaultValue={value}
    />
  );
}

export default Textarea
