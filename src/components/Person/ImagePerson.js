import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Image, CloseButton, Container } from "./styled";
import { Creators } from "store/ducks/users";

const ImagePerson = ({ src, id, commited }) => {
  const [leaving, setLeaving] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setLeaving(true);
    setTimeout(() => dispatch(Creators.removeUser(id)), 1000);
  };

  return (
    <Container>
      <CloseButton onClick={handleDelete}>x</CloseButton>
      <Image src={src} gray={commited} className={leaving && "leaving"} />
    </Container>
  );
};
export default ImagePerson;
