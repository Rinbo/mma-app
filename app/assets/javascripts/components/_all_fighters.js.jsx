const AllFighters = (props) => {
  
  
  let fighters = props.fighters.map((fighter) => {
    return(
    <div key={fighter.id}>
      <Fighter fighter={fighter} handleDelete={props.handleDelete} />
    </div>
    )
  })
  
  return(
    <div>
      {fighters}
    </div>
    )
    
}
