import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodeDetails from './EpisodeDetails';

configure({ adapter: new Adapter() });

describe('EpisodeDetails component', () => {
  it('should render', () => {
    const result = toJson(shallow(<EpisodeDetails />));
    expect(result).toMatchSnapshot();
  });
});
