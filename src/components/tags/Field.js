import Input from './Input';

const Field = ({className = "",placeholder="", name="", label="", forName=name, type="", value="", onChange = () => {return}}) => {

  return (
    <label> 
      <div>
        {label}
      </div>

      <Input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={forName} 
        value={value}
        className={className}
        onChange = {onChange}
      />
    </label>
  );

}

export default Field;