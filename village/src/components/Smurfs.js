import React, { Component } from 'react';
import './Smurfs.css';

import Smurf from './Smurf';

class Smurfs extends Component {
  render(props) {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                unSmurf={this.props.unSmurf}
              />
            );
          })}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
