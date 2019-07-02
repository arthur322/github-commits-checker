import api from "../../service/api";
import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// Types and Actions
export const { Types, Creators } = createActions({
  fetchRequest: null,
  fetchSuccess: ["user"],
  fetchError: ["error"]
});

// Initial state
const INITIAL_STATE = Immutable({
  loading: false,
  users: [],
  error: ""
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_REQUEST]: state => state.merge({ loading: true }),
  [Types.FETCH_SUCCESS]: (state, { user }) =>
    state.merge({ loading: false, users: [...state.users, user] }),
  [Types.FETCH_ERROR]: (state, { error }) =>
    state.merge({ loading: false, error })
});

// Thunks
export const fetch_user = username => async dispatch => {
  dispatch(Creators.fetchRequest());
  try {
    const { data } = await api.get(`/users/${username}`);
    dispatch(Creators.fetchSuccess(data));
  } catch (error) {
    dispatch(Creators.fetchError(error));
  }
};
