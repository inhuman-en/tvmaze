import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actionCreators';

const initialDetailsState = {
  data: null,
  error: null,
  isLoading: false,
};

const initialEpisodeListState = {
  data: null,
  error: null,
  isLoading: false,
};

export const detailsReducer = createReducer(initialDetailsState, (builder) => {
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


export const episodeListReducer = createReducer(initialEpisodeListState, (builder) => {
  builder
    .addCase(actions.loadEpisodeList, state => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
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

export default combineReducers({
  details: detailsReducer,
  episodeList: episodeListReducer
});
