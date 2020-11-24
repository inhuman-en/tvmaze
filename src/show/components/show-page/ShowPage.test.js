import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ShowPage from './ShowPage';

configure({ adapter: new Adapter() });

describe('ShowPage component', () => {
  it('should render', () => {
    const result = toJson(shallow(<ShowPage />));
    expect(result).toMatchSnapshot();
  });
});
