import './App.css';
import React, { useEffect } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import { getSecretWord } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const success = useSelector(state => state.success);
  const secretWord = useSelector(state => state.secretWord);
  const guessedWords = useSelector(state => state.guessedWords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, [])


    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input success={success} secretWord={secretWord}/>
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
}

export default App;
