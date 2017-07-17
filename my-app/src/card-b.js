import React, { Component } from 'react';
import './app.css';
import App from './app'
import PropTypes from 'prop-types';

class PropertyTwo extends React.Component {
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

PropertyTwo.defaultProps = {
  attributes: 'something different',
  address: '20 Fuller Avenue, Earlwood',
  inspection: 'Thu, 29 Jun - 6:00PM',
  auction: 'Sat, 1 Jul - 1:00PM'
}

export default PropertyTwo;
