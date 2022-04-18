import React from 'react';
import { Login } from './Loginsign/Login';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="topnav">
      <a className="navbar" href="#home">Home Page</a>
      </div>
      <div className="card-content">
        <div className="content">
          <h1 className='text_conntainer1'>Welcome to My Quize App</h1>
          <h1 className='text_container'>Start the quiz</h1>
          <p>Good luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;