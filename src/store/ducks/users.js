import api from "service/api";
import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { toast } from "react-toastify";

// Types and Actions
export const { Types, Creators } = createActions({
  fetchRequest: null,
  fetchSuccess: ["user"],
  fetchError: ["error"],
  removeUser: ["id"]
});

// Initial state
const INITIAL_STATE = Immutable({
  loading: false,
  users: [],
  error: ""
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_REQUEST]: state => ({ ...state, loading: true }),
  [Types.FETCH_SUCCESS]: (state, { user }) => ({
    ...state,
    loading: false,
    users: [...state.users, user]
  }),
  [Types.FETCH_ERROR]: (state, { error }) => ({
    ...state,
    loading: false,
    error
  }),
  [Types.REMOVE_USER]: (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id)
  })
});

// Thunks
export const fetch_user = username => async (dispatch, getState) => {
  dispatch(Creators.fetchRequest());
  const { users } = getState().users;
  try {
    const { data } = await api.get(`/users/${username}`);
    if (users.filter(user => user.id === data.id).length) {
      toast.warn("Usuário já adicionado!");
      dispatch(Creators.fetchError(""));
      return;
    }
    dispatch(Creators.fetchSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(Creators.fetchError(error));
  }
};
