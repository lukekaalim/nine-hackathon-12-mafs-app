import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  currentView: state.view.currentView,
});

const ViewName = ({ currentView }) => (<div>Current View: {currentView}</div>);

export default connect(mapStateToProps)(ViewName);
