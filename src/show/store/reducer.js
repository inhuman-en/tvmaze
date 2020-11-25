import * as types from './actionTypes';

const initialState = {
  details: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.SHOW_DETAILS_LOAD_REQUEST: 
      return {
        ...state,
        isLoading: true,
        details: null,
      };
    case types.SHOW_DETAILS_LOAD_SUCCESS: 
      const { payload } = action;
      return {
        ...state,
        details: payload,
        isLoading: false,
      };
    case types.SHOW_DETAILS_LOAD_FAIL:
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
}

export default reducer;