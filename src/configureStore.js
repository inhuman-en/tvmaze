import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const configureStore = preloadedState => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { getJSON: ajax.getJSON }
  });
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancer = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);;
  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore;
