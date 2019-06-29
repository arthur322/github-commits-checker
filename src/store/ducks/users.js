import api from "../../service/api";

// Types
export const Types = {
  FETCH_REQ: "FETCH_USER_REQUEST",
  FETCH_SUC: "FETCH_USER_SUCCESS",
  FETCH_ERR: "FETCH_USER_ERROR"
};

// Reducers
const INITIAL_STATE = {
  loading: false,
  users: [],
  error: ""
};

const users = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.FETCH_REQ:
      return { ...state, loading: true };
    case Types.FETCH_SUC:
      return {
        ...state,
        loading: false,
        users: [...state.users, payload.user]
      };
    case Types.FETCH_ERR:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};

export default users;

// Actions
export const fetch_request = () => ({
  type: Types.FETCH_REQ
});

export const fetch_success = user => ({
  type: Types.FETCH_SUC,
  payload: { user }
});

export const fetch_error = error => ({
  type: Types.FETCH_ERR,
  payload: { error }
});

// Thunks
export const fetch_user = username => async dispatch => {
  dispatch(fetch_request());
  try {
    console.log(username);
    const { data } = await api.get(`/users/${username}`);
    dispatch(fetch_success(data));
  } catch (error) {
    dispatch(fetch_error(error));
  }
};
