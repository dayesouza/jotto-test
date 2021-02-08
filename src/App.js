import './App.css';
import React, { Component } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[{guessedWord: 'Tests', letterMatchCount: 3}]}/>
      </div>
    );
  }
}

export default App;
