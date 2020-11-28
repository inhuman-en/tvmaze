import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodePage from './EpisodePage';

configure({ adapter: new Adapter() });

jest.mock('../../hooks');

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 2 }),
}));
jest.mock('react-redux');

describe('EpisodePage component', () => {
  it('should render', () => {
    const result = toJson(shallow(<EpisodePage />));
    expect(result).toMatchSnapshot();
  });
});
