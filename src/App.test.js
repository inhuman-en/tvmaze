import { configure, shallow } from 'enzyme';
// TODO: consider moving to v17 adapter when it's out
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from './App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should render', () => {
    const result = toJson(shallow(<App />));
    expect(result).toMatchSnapshot();
  });
});
