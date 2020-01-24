import {
  FETCH_SMURF,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SUCCESS,
  POST_FAIL,
  SMURF_CLEAR
} from '../actions';

const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
  added: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF: {
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    }
    case FETCH_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: false
      };
    }
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case POST_SUCCESS:
      return {
        ...state,
        added: true
      };
    case POST_FAIL:
      return {
        ...state,
        added: true
      };
    case SMURF_CLEAR:
      return {
        state
      };
    default:
      return state;
  }
};

export default reducer;
