import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../actions/view';

import ViewName from '../components/ViewName';

const mapDispachToProps = (dispatch) => ({
  goHome: () => dispatch(setView('home')),
});

const Unknown = ({ goHome }) => (
  <div>
    Unknown View
    <ViewName />
    <button onClick={goHome}>Go Back Home</button>
  </div>
);

export default connect(null, mapDispachToProps)(Unknown);
