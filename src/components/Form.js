import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepository } from "../store/actions/repository";

export default function Form() {
  const repository = useSelector(state => state.repository);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const repository = e.target.repository.value;
    dispatch(fetchRepository(repository));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="repository" />
      <button type="submit">
        {repository.loading ? "Loading..." : "Search"}
      </button>
      <pre>{JSON.stringify(repository)}</pre>
    </form>
  );
}
