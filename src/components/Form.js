import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_user } from "../store/actions/user";

export default function Form() {
  const user = useSelector(state => state.user);
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
      <button type="submit">{user.loading ? "Loading..." : "Search"}</button>
      <pre>{JSON.stringify(user)}</pre>
    </form>
  );
}
