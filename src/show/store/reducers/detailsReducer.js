import * as types from '../actionTypes';

const initialState = {
  data: null,
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
        data: null,
      };
    case types.SHOW_DETAILS_LOAD_SUCCESS: 
      const { payload } = action;
      return {
        ...state,
        data: payload,
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