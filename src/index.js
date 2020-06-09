import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Introduction from './Introduction';
import Title from './Title';

ReactDOM.render(
  <div className="App-header">
  
    <App />,<Title />,<Introduction name="MUDASSIR MUNIR"  />
  
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
