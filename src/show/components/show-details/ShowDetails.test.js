import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ShowDetails from './ShowDetails';

configure({ adapter: new Adapter() });

describe('ShowDetails component', () => {
  it('should render', () => {
    const result = toJson(shallow(<ShowDetails />));
    expect(result).toMatchSnapshot();
  });
});
