import { createAction } from '@reduxjs/toolkit';
import * as types from './actionTypes';

export const loadShowDetails = createAction(types.SHOW_DETAILS_LOAD_REQUEST);
export const loadShowDetailsSuccess = createAction(types.SHOW_DETAILS_LOAD_SUCCESS);
export const loadShowDetailsFail = createAction(types.SHOW_DETAILS_LOAD_FAIL, (error) => ({
  error,
}));

export const loadEpisodeList = createAction(types.SHOW_EPISODE_LIST_LOAD_REQUEST);
export const loadEpisodeListSuccess = createAction(types.SHOW_EPISODE_LIST_LOAD_SUCCESS);
export const loadEpisodeListFail = createAction(types.SHOW_EPISODE_LIST_LOAD_FAIL, (error) => ({
  error,
}));
