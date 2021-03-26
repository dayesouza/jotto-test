import { mount } from 'enzyme';
// eslint-disable-next-line import/first
import { Provider } from 'react-redux';
// eslint-disable-next-line import/first
import { findByTestAttr, storeFactory } from '../test/testUtils';
import App from './App';
// eslint-disable-next-line import/first
jest.mock('./redux/actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord} from './redux/actions';
//activate global mock

const setup = (initialState={}) => {
  //useEffect not called on shallow
  const store = storeFactory(initialState);
  return mount(<Provider store={store}><App /></Provider>);
}

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app).toHaveLength(1);
})

test.skip('renders Jotto title', () => {
  const wrapper = setup();
  const title = wrapper.find("h1");
  expect(title.text()).toBe('Jotto');
});

describe.skip('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  })

  test('getSecretWord on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  })

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();//updates our component and runs useEffect with it

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  })
})
