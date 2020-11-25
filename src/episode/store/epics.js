import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable'
import * as types from './actionTypes';
import {
  loadEpisodeDetailsSuccess,
  loadEpisodeDetailsFail,
} from './actionCreators';

const detailsEpic =  (action$, state$, { getJSON }) => action$.pipe(
  ofType(types.EPISODE_DETAILS_LOAD_REQUEST),
  tap(action => console.log(action)),
  switchMap(({ payload: episodeId }) => getJSON(`http://api.tvmaze.com/episodes/${episodeId}`).pipe(
    map(response => loadEpisodeDetailsSuccess(response)),
    catchError(({ response: { name }}) => of(loadEpisodeDetailsFail(name)))
  )
));

export default detailsEpic;
