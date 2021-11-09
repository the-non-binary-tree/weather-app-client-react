import './App.css';
import React from 'react'



function App() {
  return (
    <div className="App">
      Wear The Weather
      <Reservation />
      <div>Returned Data
        
      </div>

    </div>
  );
}
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aqi: true,
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
    console.log('Submitted:')
  }

  render() {
    return (
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
            type="number"
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
    );
  }
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
