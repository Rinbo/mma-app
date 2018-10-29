class Fighter extends React.Component{
  
  render(){
    return(
      <div>
        <h1>{this.props.fighter.name}</h1>
        <p>{this.props.fighter.description}</p>
      </div>
    )      
  }
}