import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should render', () => {
    const result = toJson(shallow(<App />));
    expect(result).toMatchSnapshot();
  });
});
