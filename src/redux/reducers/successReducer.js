import { actionTypes } from "../actions";
import { initialState } from "./initialState";

export default function successReducer(state = initialState.success, action) {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
    return true;
    default:
      return state;
  }
}