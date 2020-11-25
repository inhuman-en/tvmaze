import { combineReducers } from 'redux';
import { reducer as showReducer } from './show';

const rootRecucer = combineReducers({
  show: showReducer,
});

export default rootRecucer;
