import React, { Component } from 'react';

class Home extends Component {
  render(){
    return(
      <div>
        {/* <h1>Hello App.js</h1> */}
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Home