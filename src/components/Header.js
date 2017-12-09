import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className='header_left'> Want to schedule an event?</div>
        <div className='header_right'>Want to be a part of our amazing Team!?</div>
      </div>
    );
  }
}

export default Header;