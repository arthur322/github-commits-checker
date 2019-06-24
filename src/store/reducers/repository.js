const INITIAL_STATE = {
  loading: false,
  repo: ""
};

const repository = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "FETCH_REPO":
      return { loading: true, repo: payload };
    default:
      return state;
  }
};

export default repository;
