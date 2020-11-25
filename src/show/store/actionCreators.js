import * as types from './actionTypes';

export const loadShowDetails = showId => ({
  type: types.SHOW_DETAILS_LOAD_REQUEST,
  payload: showId,
});

export const loadShowDetailsSuccess = details => ({
  type: types.SHOW_DETAILS_LOAD_SUCCESS,
  payload: details,
});

export const loadShowDetailsFail = error => ({
  type: types.SHOW_DETAILS_LOAD_FAIL,
  error,
});

export const loadEpisodeList = showId => ({
  type: types.SHOW_EPISODE_LIST_LOAD_REQUEST,
  payload: showId,
});

export const loadEpisodeListSuccess = episodes => ({
  type: types.SHOW_EPISODE_LIST_LOAD_SUCCESS,
  payload: episodes,
});

export const loadEpisodeListFail = error => ({
  type: types.SHOW_EPISODE_LIST_LOAD_FAIL,
  error,
});
