import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_user } from "../../store/ducks/users";

const Form = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = e.target.user.value;
    if (!user.length) return;
    dispatch(fetch_user(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" />
      <button type="submit">{users.loading ? "Loading..." : "Add"}</button>
    </form>
  );
};

export default Form;
