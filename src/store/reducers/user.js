const INITIAL_STATE = {
  loading: false,
  user: {},
  error: ""
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, loading: false, user: payload.user };
    case "FETCH_USER_ERROR":
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};

export default user;
