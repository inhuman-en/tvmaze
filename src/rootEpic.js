import { combineEpics } from 'redux-observable';
import { epic as showEpic } from './show'

const rootEpic = combineEpics(
  showEpic,
);

export default rootEpic;