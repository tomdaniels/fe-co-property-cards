import React, { Component } from 'react';
import './app.css';

class App extends Component {
  propTypes: {
    rooms: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    inspection: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div className='page-wrap'>
        <div className='header-wrap'>
          <h1 className='headline'>Shortlist</h1>
        </div>
        <div className='shortlist-wrap'>
          <ul className='list-format'>
            <li className='attributes'>{this.props.rooms}</li>
          </ul>
          </div>
      </div>
    );
  }
}
export default App;
