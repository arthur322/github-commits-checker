import api from "../../service/api";

export const fetch_request = () => ({
  type: "FETCH_USER_REQUEST"
});

export const fetch_success = user => ({
  type: "FETCH_USER_SUCCESS",
  payload: { user }
});

export const fetch_error = error => ({
  type: "FETCH_USER_ERROR",
  payload: { error }
});

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
