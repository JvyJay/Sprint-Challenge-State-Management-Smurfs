import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import Smurf from './Smurf';

const Smurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <>
      {props.smurfs.map(item => {
        return <Smurf {...item} />;
      })}
      {props.isLoading && <p>Loading...</p>}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
    added: state.added
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
