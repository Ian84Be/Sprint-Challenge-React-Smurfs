import React, { Component } from 'react';
import axios from 'axios';
import {NavLink, Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  };
  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => { this.setState({smurfs: res.data}) })
    .catch(err => console.log(err));
  }

  unSmurf = e => {
    axios.delete(`http://localhost:3333/smurfs/${e.target.id}`)
    .then(res => { this.setState({smurfs: res.data}) })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

      <div className="nav">
      <NavLink to="/smurf-form"
      activeClassName="active">Add Smurf</NavLink>

      <NavLink exact to="/"
      activeClassName="active">Home</NavLink>
      </div>

      <Route path="/smurf-form" render={props => (
        <SmurfForm {...props} getSmurfs={this.getSmurfs}/>
      )}/>
        

      <Route path="/" render={props => (
        <Smurfs {...props} smurfs={this.state.smurfs} unSmurf={this.unSmurf} />
      )}/>

      </div>
    );
  }
}

export default App;
