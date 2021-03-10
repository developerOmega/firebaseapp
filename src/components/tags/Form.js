

const Form = ( {children, method="POST", id="", className="", action="/", style = {}, onSubmit= () => {return} } ) => {
  return (
    <form method={method} id={id} className={className} action={action} onSubmit={onSubmit} style={style}>
      { children }
    </form>
  )

}

export default Form;