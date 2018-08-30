import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Topbar from './components/Topbar/Topbar';
import Home from './containers/Home/Home';
import Jobs from './containers/Jobs/Jobs';
import Recruiters from './containers/Recruiters/Recruiters';

class App extends Component {

  state = {
    modalActive: true
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Topbar/>
          <Route path='/' exact component={Home}/>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/recruiters' component={Recruiters}/>
        </div>
      </Router>    
    );
  }
}

export default App;
