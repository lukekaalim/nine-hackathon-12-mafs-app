import React from 'react';
import { connect } from 'react-redux'

import Home from './Home';

const mapStateToProps = (state) => ({
  currentView: state.view.currentView,
});

const Views = ({ currentView }) => {
  switch(currentView) {
    default:
    case 'home':
      return <Home />;
  }
};

export default connect(mapStateToProps)(Views);
