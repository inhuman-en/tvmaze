import { combineEpics } from 'redux-observable';
import { epic as showEpic } from './show';
import { epic as episodeEpic } from './episode';

const rootEpic = combineEpics(showEpic, episodeEpic);

export default rootEpic;
