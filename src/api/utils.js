import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

/**
 * @param {Object} config - epic config
 * @param {Function} config.buildUrl - function that builds url based on request action
 * @param {String} config.requestActiontype - type of action to initiate request
 * @param {Function} config.onSuccess - success action creator
 * @param {Function} config.onFail - fail action creator
 * @return {Function}
 */
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