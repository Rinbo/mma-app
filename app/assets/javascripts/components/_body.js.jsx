class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fighters: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewFighter = this.addNewFighter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteFighter = this.deleteFighter.bind(this)
  }

  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/fighters/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteFighter(id)
      })
  }
  deleteFighter(id){
    newFighters = this.state.fighters.filter((fighter) => fighter.id !== id)
    this.setState({
      fighters: newFighters
    })
  }
  
  handleFormSubmit(name, description){
    let body = JSON.stringify({fighter: {name: name, description:   description} })
    fetch('http://localhost:3000/api/v1/fighters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((response) => {return response.json()})
      .then((fighter) => {
        this.addNewFighter(fighter)
      })    
  }
  
  addNewFighter(fighter){
    this.setState({
      fighter: this.state.fighters.concat(fighter)
    })
  }

  componentDidMount(){
    fetch('/api/v1/fighters.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fighters: data }) });
  }  

  render(){
    return(
      <div>
        <Newfighter handleFormSubmit={this.handleFormSubmit} />
        <AllFighters fighters={this.state.fighters} handleDelete={this.handleDelete} />
      </div>
    )
  }
}
