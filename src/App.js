import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers';
import Views from './views';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Views />
      </Provider>
    );
  }
}

export default App;
