import React from 'react';
import { connect } from 'react-redux'

import Home from './Home';
import Unknown from './Unknown';
import Quiz from './Quiz';
import YourProfile from './YourProfile';

const mapStateToProps = (state) => ({
  currentView: state.view.currentView,
});

const Views = ({ currentView }) => {
  switch(currentView) {
    default:
      return <Unknown />;
    case 'home':
      return <Home />;
    case 'yourprofile':
      return <YourProfile />
    case 'quiz':
      return <Quiz />;
  }
};

export default connect(mapStateToProps)(Views);
