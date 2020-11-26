import { URLS, createFetchEpic } from 'api';

import * as types from './actionTypes';
import { loadEpisodeDetailsSuccess, loadEpisodeDetailsFail } from './actionCreators';

const detailsEpic = createFetchEpic({
  buildUrl: ({ payload: episodeId }) => `${URLS.episodes}/${episodeId}`,
  requestActionType: types.EPISODE_DETAILS_LOAD_REQUEST,
  onSuccess: loadEpisodeDetailsSuccess,
  onFail: loadEpisodeDetailsFail,
});

export default detailsEpic;
