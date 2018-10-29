class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fighters: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(name, description){
    console.log(name, description)
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
        <AllFighters fighters={this.state.fighters} />
      </div>
    )
  }
}
