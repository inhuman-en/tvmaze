import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable'
import * as types from './actionTypes';
import {
  loadShowDetailsSuccess,
  loadShowDetailsFail,
  loadEpisodeListSuccess,
  loadEpisodeListFail,
} from './actionCreators';

const detailsEpic =  (action$, state$, { getJSON }) => action$.pipe(
  ofType(types.SHOW_DETAILS_LOAD_REQUEST),
  tap(action => console.log(action)),
  switchMap(({ payload: showId }) => getJSON(`http://api.tvmaze.com/shows/${showId}`).pipe(
    map(response => loadShowDetailsSuccess(response)),
    catchError(({ response: { name }}) => of(loadShowDetailsFail(name)))
  )
));

const episodeListEpic =  (action$, state$, { getJSON }) => action$.pipe(
  ofType(types.SHOW_EPISODE_LIST_LOAD_REQUEST),
  tap(action => console.log(action)),
  switchMap(({ payload: showId }) => getJSON(`http://api.tvmaze.com/shows/${showId}/episodes`).pipe(
    map(response => loadEpisodeListSuccess(response)),
    catchError(({ response: { name }}) => of(loadEpisodeListFail(name)))
  )
));

export default combineEpics(detailsEpic, episodeListEpic);
