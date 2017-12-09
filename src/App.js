import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className='app_container'>
          <h1 id='title' >EXCLUSIVE TALENT MARKETING PROMOTIONS</h1>
          <h2 id='title_sub'>Nationwide Talent Marketing Promotions</h2>
          <div className='home_lower' >
            <div>
              <ul className='menu'>
                <a href='#'><li>OUR TEAM</li></a>
                <a href='#'><li>PROMOTIONS</li></a>
                <a href='#'><li>NEWS</li></a>
                <a href='#'><li>CONTACT US</li></a>
              </ul>
            </div>
          </div>
        </div>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;
