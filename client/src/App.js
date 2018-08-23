import React, { Component } from 'react';
import './App.css';

import Topbar from './components/Topbar/Topbar';
import Home from './containers/Home/Home';
import Jobs from './containers/Jobs/Jobs';
import Recruiters from './containers/Recruiters/Recruiters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar/>
        <Home/>
        <Jobs/>
        <Recruiters/>
      </div>
    );
  }
}

export default App;
