const Newfighter = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { 
      props.handleFormSubmit(formFields.name.value, formFields.description.value); 
      e.target.reset();
      } }>
     <input ref={input => formFields.name = input} placeholder='Name' id="fighter-name"/>
     <input ref={input => formFields.description = input} placeholder='Description' id="description" />
     <button>Submit</button>
    </form>
  )
}