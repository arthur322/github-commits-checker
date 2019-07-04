import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Image, CloseButton, Container } from './styled';
import { Creators } from '../../store/ducks/users';

const ImagePerson = ({ src, id }) => {
  const dispatch = useDispatch();
  const imageRef = useRef();

  const handleDelete = () => {
    dispatch(Creators.removeUser(id));
  };

  useEffect(() => {
    setTimeout(() => (imageRef.current.className += ' show'), 10);
  }, []);

  return (
    <Container>
      <CloseButton onClick={handleDelete}>x</CloseButton>
      <Image src={src} ref={imageRef} />
    </Container>
  );
};
export default ImagePerson;
