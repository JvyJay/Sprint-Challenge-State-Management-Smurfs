import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const SMURF_CLEAR = 'SMURF_CLEAR';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: err.response });
    });
};

export const postSmurf = (name, age, height) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => dispatch({ type: POST_SUCCESS }))
    .catch(err => dispatch({ type: POST_FAIL }));
};

export const clear = () => {
  return { type: SMURF_CLEAR };
};
