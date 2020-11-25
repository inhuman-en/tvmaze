import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actionCreators';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.loadShowDetails, (state) => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    })
    .addCase(actions.loadShowDetailsSuccess, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(actions.loadShowDetailsFail, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
});

export default reducer;
