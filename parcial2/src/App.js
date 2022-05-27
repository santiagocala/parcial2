import React from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import Movies from './components/Movies';
import {FormattedMessage} from 'react-intl';
import Spaces from './components/Spaces';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <FormattedMessage id='Title'/>
        </h1>
      </header>
      <Spaces/>
    </div>
  );
}

export default App;
