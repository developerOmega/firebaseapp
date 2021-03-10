import Input from './Input';
import styles from './Field.module.scss';

const Field = ({placeholder="", name="", label="", forName=name, type="", value="", onChange = () => {return}}) => {

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
        className={styles.input}
        onChange = {onChange}
      />
    </label>
  );

}

export default Field;