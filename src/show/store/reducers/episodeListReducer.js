import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actionCreators';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.loadEpisodeList, state => {
      state.isLoading = true;
      state.data = null;
    })
    .addCase(actions.loadEpisodeListSuccess, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(actions.loadEpisodeListFail, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
});

export default reducer;
