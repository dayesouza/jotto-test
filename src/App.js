import './App.css';
import React, { useEffect } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import { getSecretWord } from './redux/actions';
import { useSelector } from 'react-redux';

function App() {

  useEffect(() => {
    getSecretWord();
  }, [])

  const success = useSelector(state => state.success);
  const secretWord = 'party';
  const guessedWords = useSelector(state => state.guessedWords);;

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
