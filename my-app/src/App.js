import React from 'react';
import PropertyCard from './components/property-cards/property-card';
import shortlistData from './helpers/get-shortlist-data';
import FilterOptions from './components/filter/filter-bar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='outer-wrap'>
        <div className='header-wrap'>
          <h1 className='main-headline'>Shortlist</h1>
          <FilterOptions/>
        </div>
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
