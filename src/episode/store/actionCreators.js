import { createAction } from '@reduxjs/toolkit';
import * as types from './actionTypes';

export const loadEpisodeDetails = createAction(types.EPISODE_DETAILS_LOAD_REQUEST);
export const loadEpisodeDetailsSuccess = createAction(types.EPISODE_DETAILS_LOAD_SUCCESS);
export const loadEpisodeDetailsFail = createAction(types.EPISODE_DETAILS_LOAD_FAIL, error => ({
  error,
}));
