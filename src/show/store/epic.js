import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ofType, } from 'redux-observable'
import * as types from './actionTypes';
import {
  loadShowDetailsSuccess,
  loadShowDetailsFail,
} from './actionCreators';

const showEpic =  (action$, state$, { getJSON }) => action$.pipe(
  ofType(types.SHOW_DETAILS_LOAD_REQUEST),
  tap(action => console.log(action)),
  switchMap(({ payload: showId }) => getJSON(`http://api.tvmaze.com/shows/${showId}`).pipe(
    map(response => loadShowDetailsSuccess(response)),
    catchError(error => of(loadShowDetailsFail(error)))
  )
));

export default showEpic;
