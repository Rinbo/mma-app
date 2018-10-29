const Newfighter = (props) => {
  let formFields = {}
 
  return(
    <form>
     <input ref={input => formFields.name = input} placeholder='Enter the name of the fighter'/>
     <input ref={input => formFields.description = input} placeholder='Enter a description' />
     <button>Submit</button>
    </form>
  )
}