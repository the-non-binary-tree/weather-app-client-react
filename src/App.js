import './App.css';
import React from 'react'



function App() {
  return (
    <div className="App">
      Wear The Weather
      <QueryForm />
      <div>Returned Data
        
      </div>

    </div>
  );
}
class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aqi: false,
      postalCode: 98144,
      location: 'Seattle'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted:', JSON.stringify(event.target.state))
  }

  render() {
    return (
      <div>Query Form
        <form onSubmit={this.handleSubmit}>
          <label>
            Get Air Quality Index:
            <input
              name="aqi"
              type="checkbox"
              checked={this.state.aqi}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Postal Code:
            <input
              name="postalCode"
              type="text"
              value={this.state.postalCode}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Location:
            <input
              name="location"
              type="text"
              value={this.state.location}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
