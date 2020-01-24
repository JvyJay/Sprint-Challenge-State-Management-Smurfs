import React from 'react';
import { clear } from '../actions';
import { connect } from 'react-redux';

const Clear = props => {
  return <button onClick={props.clear}>Clear</button>;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { clear })(Clear);
