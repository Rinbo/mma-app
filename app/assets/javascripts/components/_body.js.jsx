class Body extends React.Component {

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
    return(
      <div>
        <AllFighters fighters={this.state.fighters} />
      </div>
    )
  }
}
