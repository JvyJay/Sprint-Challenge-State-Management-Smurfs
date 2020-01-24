import React, { useState } from 'react';
import { postSmurf, clear } from '../actions';
import { connect } from 'react-redux';

const Add = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAge = e => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleHeight = e => {
    e.preventDefault();
    setHeight(e.target.value);
  };

  const submission = e => {
    e.preventDefault();
    props.postSmurf(name, age, height);
    setName('');
    setAge('');
    setHeight('');
  };
  return (
    <>
      <form onSubmit={submission}>
        <input
          placeholder={`Name`}
          type='text'
          name='name'
          value={name}
          onChange={handleName}
        />
        <input
          placeholder={`Age`}
          type='text'
          name='age'
          value={age}
          onChange={handleAge}
        />
        <input
          placeholder={`Height`}
          type='text'
          name='height'
          value={height}
          onChange={handleHeight}
        />
        <button>Submit</button>
        <button onClick={props.clear}>Clear</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { postSmurf, clear })(Add);
