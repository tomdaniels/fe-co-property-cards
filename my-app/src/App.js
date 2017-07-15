import React, { Component } from 'react';
import './app.css';
import Fixtures from './index.js'
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div className='container-wrap'>
        <div className='prop-specifics'>
          <ul className='list-format'>
            <li>{this.props.attributes}</li>
            <a href='https://domain.com.au/2013644419' className='prop-address'>{this.props.address}</a>
            </ul>
        </div>
        <hr className='section-separate'></hr>
        <div className='prop-dates-wrap'>
            <div>
              <div className='dates-left'>Inspection</div>
              <span className='dates-right'>{this.props.inspection}</span>
            </div>
            <div>
              <div className='dates-left'>Auction</div>
              <span className='dates-right-auc'>{this.props.auction}</span>
            </div>
        </div>
      </div>
    );
  }
};

Component.defaultProps = {
  attributes: '5 beds, 3 baths, 2 parking',
  address: '20 Fuller Avenue, Earlwood',
  inspection: 'Thu, 29 Jun - 6:00PM',
  auction: 'Sat, 1 Jul - 1:00PM'
}

export default App;
