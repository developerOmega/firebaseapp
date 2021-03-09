import Input from './Input';

const Field = ({placeholder="", name="", label="", forName=name, type="", value="", onChange = () => {return}}) => {

  return (
    <div className="field">
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
          onChange = {onChange}
        />
      </label>
    </div>
  );

}

export default Field;