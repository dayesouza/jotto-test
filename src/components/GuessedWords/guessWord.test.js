import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory} from '../../../test/testUtils';
import App from '../../App';
import GuessedWords from './GuessedWords';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/first
jest.mock('../../redux/actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord} from '../../redux/actions';

// test.skip of test.only to skip or only run one
const setup = (initialState= {}) => {
  const store = storeFactory(initialState);

  const wrapper = mount(<Provider store={store}><App /></Provider>);
  
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', {target: {value: 'train'}});

  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', {preventDefault(){}});

  return wrapper;
}

test('renders without error', () => {
  const wrapper = setup({success: false})
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app).toHaveLength(1);
})

describe("no word guesses", () => {
  let wrapper;
  beforeEach(() => {
    const state = {
      secretWord: 'party',
      success: false,
      guessedWords: []
    }
    wrapper = setup(state)
  });

  test("created GuessedWords table with one row", () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(1);
  })

})

describe("some word guessed", () => {
  let wrapper;
  beforeEach(() => {
    const state = {
      secretWord: 'party',
      success: false,
      guessedWords: [
        {guessedWord: 'agile', letterMatchCount: 1}
      ]
    }
    wrapper = setup(state)
  })

  test("created GuessedWords table with one row", () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(2);
  })

})

describe("guess secret word", () => {
  let wrapper;
  beforeEach(() => {
    const state = {
      secretWord: 'party',
      success: false,
      guessedWords: [
        {guessedWord: 'agile', letterMatchCount: 1}
      ]
    }
    wrapper = setup(state);

    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target: {value: 'party'}});
  
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventDefault(){}});
  
  })

  test("add rows to GuessedWords table", () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(3);
  });

  test("displays congrats component", () => {
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(10);
  });

  test("does not display input component contents", () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  });


})


