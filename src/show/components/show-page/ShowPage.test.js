import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ShowPage from './ShowPage';

configure({ adapter: new Adapter() });

jest.mock('../../hooks');

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 2 }),
  useRouteMatch: () => ({ path: '/show/2' }),
  generatePath: jest.fn(),
  Link: ({ children }) => <div>{children}</div>,
}));

describe('ShowPage component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    require('react-router-dom').generatePath.mockReturnValueOnce(1).mockReturnValueOnce(3);

    const result = toJson(shallow(<ShowPage />));
    expect(result).toMatchSnapshot();
  });
});
