import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ErrorMessage from './ErrorMessage';

configure({ adapter: new Adapter() });

describe('ErrorMessage component', () => {
  it('should render', () => {
    const result = toJson(shallow(<ErrorMessage />));
    expect(result).toMatchSnapshot();
  });
});
