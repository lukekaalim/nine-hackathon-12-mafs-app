import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './Reducers';

import ViewName from './Components/ViewName';
import Views from './Views';

import logo from './logo.svg';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <Views />
            <ViewName />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
