import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import Component from './app';

const fixtureGroups = [
  {
    component: Component,
        props: {
          rooms: '5 beds, 3 baths, 2 parking',
          address: '20 Fuller Avenue, Earlwood',
          inspection: 'Thu, 29 Jun - 6:00PM',
          auction: '"Sat, 1 Jul - 1:00PM"'
    },
  },
];

export default fixtureGroups;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
