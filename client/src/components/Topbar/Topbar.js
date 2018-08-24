import React from 'react';
import { Link } from 'react-router-dom';

import './Topbar.css';
import logo from '../../images/jobs_icon.png';

const Topbar = (props) => {
  return (
    <div className="Topbar">
      <div className="tb-container">
        <div className="logo"><img src={logo} alt=""/></div>
        <div className="title">JobSeeker</div>
        <nav className="main-nav">
          <ul>
            <Link to="/"><li className="active">Home</li></Link>
            <Link to="/jobs"><li>Jobs</li></Link>
            <Link to="recruiters"><li>Recruiters</li></Link>
          </ul>
        </nav>
      </div>
      
    </div>
  )
};

export default Topbar;
