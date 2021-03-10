import Input from './Input';

const Field = ({className = "",placeholder="", name="", label="", forName=name, type="", value="", onChange = () => {return}}) => {

  return (
    <label className={className}> 
      
      <Input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={forName} 
        value={value}
        onChange = {onChange}
      />

      <div>
        {label}
      </div>
    </label>
  );

}

export default Field;