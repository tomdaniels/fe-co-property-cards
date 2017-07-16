import React from 'react';
import './app.css';

class App extends React.Component {
  render() {
    return (
    <div className='outer-wrap'>
      <h1 className='main-headline'>Shortlist</h1>
        <div className='container-wrap'>
          <div className='card-wrap'>
            <div className='prop-specifics'>
              <img className='thumbnail' alt='Property Thumbnail' src={this.props.imageUrl}/>
              <ul className='list-format'>
                <li className='status'>{this.props.status}</li>
                <li className='attributes'>{this.props.attributes}</li>
                <a href='https://domain.com.au/2013644419' className='prop-address'>{this.props.address}</a>
              </ul>
            </div>
            <hr className='section-separate'></hr>
              <div className='prop-dates-wrap'>
                <div className='date-align'>
                  <div className='dates-left'>Inspection</div>
                  <span className='dates-right'>{this.props.inspection}</span>
                </div>
                  <div>
                    <div className='dates-left'>Auction</div>
                    <span className='dates-right-auc'>{this.props.auction}</span>
                  </div>
                </div>
              </div>
            </div>
    </div>
    );
  }
};

App.defaultProps = {
  imageUrl: 'https://rimh2.domain.com.au/TJ_VzRm3ltHqkqonTBdexZhzUXI=/fit-in/800x600/filters:format(jpeg)/2013644419_9_0_170606_094015-w1200-h801',
  status: 'Auction, contact agent',
  attributes: '5 beds, 3 baths, 2 parking',
  address: '20 Fuller Avenue, Earlwood',
  inspection: 'Thu, 29 Jun - 6:00PM',
  auction: 'Sat, 1 Jul - 1:00PM',
}

export default App;
