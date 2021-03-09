const Button = ( {children, type="submit", onClick} ) => {

  return (
    <button type={type} onClick={onClick}> {children} </button>
  );

}

export default Button;