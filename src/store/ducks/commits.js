import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// Types and Actions
export const { Types, Creators } = createActions({
  setSelectedDay: ['day'],
});

// Initial state
const INITIAL_STATE = Immutable({
  day: new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 10),
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SELECTED_DAY]: (state, { day }) => ({ ...state, day }),
});

// Thunks
