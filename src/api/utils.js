import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const createFetchEpic = ({
  buildUrl, requestActionType, onSuccess, onFail,
}) => (action$, state$, { getJSON }) =>
action$.pipe(
  ofType(requestActionType),
  switchMap((requestAction) =>
    getJSON(buildUrl(requestAction)).pipe(
      map((response) => onSuccess(response)),
      catchError(({ response: { name } }) => of(onFail(name))),
    ),
  ),
);