import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('Spinner component', () => {
  it('should render', () => {
    const result = toJson(shallow(<Spinner />));
    expect(result).toMatchSnapshot();
  });
});
