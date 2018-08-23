import React from 'react';

const Topbar = (props) => {
  return (
    <div>
      <div className="logo">Logo</div>
      <div className="title">JobSeeker</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>JobSeeker</li>
          <li>Recruiters</li>
        </ul>
      </nav>
    </div>
  )
};

export default Topbar;
