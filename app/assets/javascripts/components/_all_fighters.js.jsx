class AllFighters extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fighters: []
    };
  }

  componentDidMount(){
    fetch('/api/v1/fighters.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fighters: data }) });
  }
  
  render(){
    let fighters = this.state.fighters.map((fighter) => {
      return(
       <div key={fighter.id}>
        <h3>{fighter.name}</h3>
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