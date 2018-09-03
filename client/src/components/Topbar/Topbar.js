import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
            <li><NavLink to="/companies">Companies</NavLink></li>
            <li><NavLink to="recruiters">Recruiters</NavLink></li>
          </ul>
        </nav>
      </div>    
    </div>
  )
};

export default Topbar;
