import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EpisodeDetails from './EpisodeDetails';

configure({ adapter: new Adapter() });

describe('EpisodeDetails component', () => {
  const mockProps = {
    data: {
      image: {
        medium: 'https://example.com/medium',
        original: 'https://example.com/original',
      },
      name: 'episode name',
      summary: 'episode summary',
    },
  };

  it('should render', () => {
    const result = toJson(shallow(<EpisodeDetails {...mockProps} />));
    expect(result).toMatchSnapshot();
  });
});
