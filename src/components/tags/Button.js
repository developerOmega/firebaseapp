import styles from './Button.module.scss';

const Button = ( {children, className="", type="submit", onClick} ) => {

  return (
    <button className={styles.btn} className={className} type={type} onClick={onClick}> {children} </button>
  );

}

export default Button;