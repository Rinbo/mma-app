class Fighter extends React.Component{
  
  render(){
    return(
      <div>
        <h1>{this.props.fighter.name}</h1>
        <p>{this.props.fighter.description}</p>
        <button onClick={() => this.props.handleDelete(this.props.fighter.id)}>Delete</button>
      </div>
    )      
  }
}