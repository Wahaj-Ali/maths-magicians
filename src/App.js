import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
