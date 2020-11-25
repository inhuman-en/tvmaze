import { combineReducers } from 'redux';
import { reducer as showReducer } from './show';
import { reducer as episodeReducer } from './episode';

const rootRecucer = combineReducers({
  selectedShow: showReducer,
  selectedEpisode: episodeReducer,
});

export default rootRecucer;
