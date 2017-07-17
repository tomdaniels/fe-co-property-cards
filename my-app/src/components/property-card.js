import React from 'react';
import './property-card.css';

class PropertyCard extends React.Component {
  render() {
    return (
      <div className='container-wrap'>
        <div className='card-wrap'>
          <div className='prop-specifics'>
            <div className='thumbnail' style={{backgroundImage: `url("${this.props.Image}")`,}}>
            <div className='status'>{this.props.Status}</div>
            </div>
            <ul className='list-format'>
              <li className='attributes'>{this.props.Rooms}</li>
              <a href={`https://domain.com.au/${this.props.AdId}`} className='prop-address'>{this.props.Address}</a>
            </ul>
          </div>
          <hr className='section-separate'></hr>
            <div className='prop-dates-wrap'>
              <div className='date-align'>
                <div className='dates-left'>Inspection</div>
                <span className='dates-right'>{this.props.Inspection}</span>
              </div>
                <div>
                  <div className='dates-left'>Auction</div>
                  <span className='dates-right-auc'>{this.props.Auction}</span>
                </div>
              </div>
            </div>
          </div>
    );
  }
};

export default PropertyCard;
