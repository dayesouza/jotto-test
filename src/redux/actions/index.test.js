import moxios from 'moxios';
import { storeFactory } from '../../../test/testUtils';
import { getSecretWord, correctGuess, } from './';
import { actionTypes } from '../actions';


describe('correctGuess', () => {
  test('returns an action with tupe correct guess', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({type: actionTypes.CORRECT_GUESS})
  })
})

describe('getSecretWord action creator', () => {
  beforeEach(() => {
      moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })

  test("adds response word to state", () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      })
    })
    
    return store.dispatch(getSecretWord())
    .then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    })
  })


})