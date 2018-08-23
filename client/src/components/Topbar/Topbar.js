import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = (props) => {
  return (
    <div>
      <div className="logo">Logo</div>
      <div className="title">JobSeeker</div>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/jobs"><li>JobSeeker</li></Link>
          <Link to="recruiters"><li>Recruiters</li></Link>
        </ul>
      </nav>
    </div>
  )
};

export default Topbar;
