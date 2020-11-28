import { detailsReducer, episodeListReducer } from './reducer';

describe('show reducers', () => {
  describe('show details reducer', () => {
    const initialState = {
      data: null,
      error: null,
      isLoading: false,
    };

    it('should return correct state after [SHOW] SHOW_DETAILS_LOAD_REQUEST action', () => {
      const action = {
        type: '[SHOW] SHOW_DETAILS_LOAD_REQUEST',
        payload: 1,
      };
      const result = detailsReducer(initialState, action);
      expect(result).toMatchSnapshot();
    });

    it('should return correct state after [SHOW] SHOW_DETAILS_LOAD_SUCCESS action', () => {
      const mockResponse = {
        id: 1,
        name: 'episode name',
        image: null,
        airDate: '2017-04-04',
      };
      const action = {
        type: '[SHOW] SHOW_DETAILS_LOAD_SUCCESS',
        payload: mockResponse,
      };
      const result = detailsReducer(initialState, action);
      expect(result).toMatchSnapshot();
    });

    it('should return correct state after [SHOW] SHOW_DETAILS_LOAD_FAIL action', () => {
      const mockError = 'Something bad happened';
      const action = {
        type: '[SHOW] SHOW_DETAILS_LOAD_FAIL',
        error: mockError,
      };
      const result = detailsReducer(initialState, action);
      expect(result).toMatchSnapshot();
    });
  });

  describe('episode list reducer', () => {
    const initialState = {
      data: null,
      error: null,
      isLoading: false,
    };

    it('should return correct state after [SHOW] SHOW_EPISODE_LIST_LOAD_REQUEST action', () => {
      const action = {
        type: '[SHOW] SHOW_EPISODE_LIST_LOAD_REQUEST',
        payload: 1,
      };
      const result = episodeListReducer(initialState, action);
      expect(result).toMatchSnapshot();
    });

    it('should return correct state after [SHOW] SHOW_EPISODE_LIST_LOAD_SUCCESS action', () => {
      const mockResponse = {
        id: 1,
        name: 'episode name',
        image: null,
        airDate: '2017-04-04',
      };
      const action = {
        type: '[SHOW] SHOW_EPISODE_LIST_LOAD_SUCCESS',
        payload: mockResponse,
      };
      const result = episodeListReducer(initialState, action);
      expect(result).toMatchSnapshot();
    });

    it('should return correct state after [SHOW] SHOW_EPISODE_LIST_LOAD_FAIL action', () => {
      const mockError = 'Something bad happened';
      const action = {
        type: '[SHOW] SHOW_EPISODE_LIST_LOAD_FAIL',
        error: mockError,
      };
      const result = episodeListReducer(initialState, action);
      expect(result).toMatchSnapshot();
    });
  });
});
