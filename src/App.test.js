import { shallow} from 'enzyme';
import App from './App';

test('renders Jotto title', () => {
  const component = shallow(<App />);
  const title = component.find("h1");
  expect(title.text()).toBe('Jotto');
});
