import React from 'react';
import PropertyCard from './components/property-card';
import shortlistData from './helpers/get-shortlist-data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='outer-wrap'>
        <h1 className='main-headline'>Shortlist</h1>
        <div className='shortlist-whole'>
          {
            shortlistData.map((shortlistItem) => {
              return <PropertyCard key={shortlistItem.AdId} {...shortlistItem} />;
            })
          }
        </div>
      </div>
    );
  }
};

export default App;
