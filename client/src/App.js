import React, { Component } from 'react';
import './App.css';

import Topbar from './components/Topbar/Topbar';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
