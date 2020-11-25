import { combineReducers } from 'redux';
import detailsReducer from './detailsReducer';
import episodeListReducer from './episodeListReducer';

export default combineReducers({
  details: detailsReducer,
  episodeList: episodeListReducer
});
