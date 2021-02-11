import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Input(props) {
  return (
    <>
    <div data-test="component-input">
      {!props.success && (
        <form className="form-inline">
          <input data-test="input-box" className="mb2 mx-sm-3" placeholder="enter guess" type="text"></input>
          <button data-test="submit-button" type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
      )}
    </div>
    </>
  );
}

Input.propTypes = {
  
};

const mapStateToProps = ({success}) => {
  return { success };
}

export default connect(mapStateToProps)(Input);