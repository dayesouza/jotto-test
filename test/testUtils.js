import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/redux/reducers';
import { createStore } from 'redux';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
;}

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}