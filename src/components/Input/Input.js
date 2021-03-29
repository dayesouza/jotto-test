import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { guessWord } from '../../redux/actions';

function Input() {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const dispatch = useDispatch();
  const success = useSelector(state => state.success);

  return (
    <>
      <div data-test="component-input">
    {!success &&
          <form className="form-inline">
            <input 
            data-test="input-box"
            className="mb2 mx-sm-3" 
            placeholder="enter guess" type="text" 
            value={currentGuess}
            onChange={(event) => setCurrentGuess(event.target.value)}></input>
            <button 
            onClick={(event) => {
              event.preventDefault(); 
              dispatch(guessWord(currentGuess));
              setCurrentGuess('')}}
            data-test="submit-button" 
            className="btn btn-primary mb-2">Submit</button>
          </form>
        }
      </div>
    </>
  );
}

export default Input;