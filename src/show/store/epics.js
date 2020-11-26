import { combineEpics } from 'redux-observable';

import { URLS, createFetchEpic } from 'api';

import * as types from './actionTypes';
import { loadShowDetailsSuccess, loadShowDetailsFail, loadEpisodeListSuccess, loadEpisodeListFail } from './actionCreators';


const detailsEpic = createFetchEpic({
  buildUrl: ({ payload: showId }) => `${URLS.shows}/${showId}`,
  requestActionType: types.SHOW_DETAILS_LOAD_REQUEST,
  onSuccess: loadShowDetailsSuccess,
  onFail: loadShowDetailsFail,
});

const episodeListEpic = createFetchEpic({
  buildUrl: ({ payload: showId }) => `${URLS.shows}/${showId}/episodes`,
  requestActionType: types.SHOW_EPISODE_LIST_LOAD_REQUEST,
  onSuccess: loadEpisodeListSuccess,
  onFail: loadEpisodeListFail,
});

export default combineEpics(detailsEpic, episodeListEpic);
