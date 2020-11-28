import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodeList from './EpisodeList';

configure({ adapter: new Adapter() });

describe('EpisodeList component', () => {
  const mockProps = {
    data: [
      { id: 1, number: 2, season: 3, name: 'episode 3x2', airdate: '2016-04-04' },
      { id: 1, number: 3, season: 3, name: 'episode 3x3', airdate: '2016-05-04' },
    ],
  };
  it('should render', () => {
    const result = toJson(shallow(<EpisodeList {...mockProps} />));
    expect(result).toMatchSnapshot();
  });
});
