class AllFighters extends React.Component {
  
  render() {
    let fighters = this.props.fighters.map((fighter) => {
      return(
      <div key={fighter.id}>
        <h1>{fighter.name}</h1>
        <p>{fighter.description}</p>
      </div>
      )
    })
    
    return(
      <div>
        {fighters}
      </div>
      )
  }    
}
