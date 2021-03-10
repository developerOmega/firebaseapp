const Button = ( {children, className="", type="submit", onClick} ) => {

  return (
    <button className={className} type={type} onClick={onClick}> {children} </button>
  );

}

export default Button;