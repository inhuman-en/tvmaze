import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ShowDetails from './ShowDetails';

configure({ adapter: new Adapter() });

describe('ShowDetails component', () => {
  const mockProps = {
    data: {
      image: {
        medium: 'https://example.com/medium',
        original: 'https://example.com/original',
      },
      name: 'show name',
      summary: 'show summary',
    },
  };

  it('should render', () => {
    const result = toJson(shallow(<ShowDetails {...mockProps} />));
    expect(result).toMatchSnapshot();
  });
});
