import reducer from './reducer';

describe('episode reducer', () => {
  const initialState = {
    data: null,
    error: null,
    isLoading: false,
  };

  it('should return correct state after [EPISODE] EPISODE_DETAILS_LOAD_REQUEST action', () => {
    const action = {
      type: '[EPISODE] EPISODE_DETAILS_LOAD_REQUEST',
      payload: 1,
    }
    const result = reducer(initialState, action);
    expect(result).toMatchSnapshot();
  });

  it('should return correct state after [EPISODE] EPISODE_DETAILS_LOAD_SUCCESS action', () => {
    const mockResponse = {
      id: 1,
      name: 'episode name',
      image: null,
      airDate: '2017-04-04',
    };
    const action = {
      type: '[EPISODE] EPISODE_DETAILS_LOAD_SUCCESS',
      payload: mockResponse,
    }
    const result = reducer(initialState, action);
    expect(result).toMatchSnapshot();
  });

  it('should return correct state after [EPISODE] EPISODE_DETAILS_LOAD_FAIL action', () => {
    const mockError = 'Something bad happened';
    const action = {
      type: '[EPISODE] EPISODE_DETAILS_LOAD_FAIL',
      error: mockError,
    }
    const result = reducer(initialState, action);
    expect(result).toMatchSnapshot();
  });
});
