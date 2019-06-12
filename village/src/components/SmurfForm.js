import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import './SmurfForm.css';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    toHome:false,
  };

  addSmurf = event => {
    event.preventDefault();
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => this.props.getSmurfs())
    .then(res => this.setState(({toHome: true})))
    .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.toHome === true) return ( <Redirect to="/" /> );
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            onChange={this.handleInputChange}
            value={this.state.age}
            name="age"
          />
          <label htmlFor="height">Height</label>
          <input
            id="height"
            onChange={this.handleInputChange}
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
