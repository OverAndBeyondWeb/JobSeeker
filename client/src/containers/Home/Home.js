import React, { Component } from 'react';
import './Home.css';

import LandingPage from '../../components/LandingPage/LandingPage';

class Home extends Component {

  state = {

  }

  render() {
    return (
      <div>
        This Is the Home Container
        <LandingPage/>
      </div>
    )
  }
};

export default Home;
