import { combineReducers } from 'redux';
import { reducer as showReducer } from './show';

const rootRecucer = combineReducers({
  selectedShow: showReducer,
});

export default rootRecucer;
