import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  it('should render', () => {
    const result = toJson(shallow(<Header />));
    expect(result).toMatchSnapshot();
  });
});
