import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodeList from './EpisodeList';

configure({ adapter: new Adapter() });

describe('EpisodeList component', () => {
  it('should render', () => {
    const result = toJson(shallow(<EpisodeList />));
    expect(result).toMatchSnapshot();
  });
});
