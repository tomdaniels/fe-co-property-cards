import React, { Component } from 'react';
import './app.css';
import fixtureGroups from './index.js'

class App extends Component {
  propTypes: {
    rooms: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    inspection: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div className='container-wrap'>
        <div className='prop-specifics'>
          <ul className='list-format'>
            <li>5 beds, 3 baths, 2 parking</li>
            <a href='https://domain.com.au/2013644419' className='prop-address'>20 Fuller Avenue, Earlwood</a>
            </ul>
        </div>
        <hr className='section-separate'></hr>
        <div className='prop-dates-wrap'>
            <div>
              <div className='dates-left'>Inspection</div>
              <span className='dates-right'>Thu, 29 Jun - 6:00PM</span>
            </div>
            <div>
              <div className='dates-left'>Auction</div>
              <span className='dates-right-auc'>Sat, 1 Jul - 1:00PM</span>
            </div>
        </div>
      </div>
    );
  }
};

export default App;
