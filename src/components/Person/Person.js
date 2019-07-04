import React from 'react';
import { Wrapper } from '../../elements';

import { PersonContainer } from './styled';
import ImagePerson from './ImagePerson';

const Person = ({ user }) => {
  return (
    <PersonContainer>
      <Wrapper key={user.id} margin="5px 15px">
        <ImagePerson src={user.avatar_url} id={user.id} />
        <h4>{user.name}</h4>
      </Wrapper>
    </PersonContainer>
  );
};

export default Person;
