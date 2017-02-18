import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<h1>Hello World</h1>*/}
        <div>
          <Link to="/home">
            Home
        </Link>
          <Link to="/about">
            About
        </Link>
          <Link to="/contact">
            Contact
        </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
