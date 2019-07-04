import React from "react";
import { useDispatch } from "react-redux";

import { Image, CloseButton, Container } from "./styled";
import { Creators } from "../../store/ducks/users";

const ImagePerson = ({ src, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(Creators.removeUser(id));
  };

  return (
    <Container>
      <CloseButton onClick={handleDelete}>x</CloseButton>
      <Image src={src} />
    </Container>
  );
};
export default ImagePerson;