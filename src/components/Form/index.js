import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_user } from "../../store/ducks/users";

import { Input, Button, StyledForm } from "./styled";

const Form = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus(), []);

  const handleSubmit = e => {
    e.preventDefault();
    const user = e.target.user.value;
    if (!user.length) return;
    dispatch(fetch_user(user));
    e.target.user.value = '';
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" name="user" ref={inputRef} maxLength={20} />
      <Button type="submit">
        {users.loading ? "Loading..." : "Adicionar"}
      </Button>
    </StyledForm>
  );
};

export default Form;
