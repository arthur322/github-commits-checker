import React, { useState, useEffect } from 'react';
import { Wrapper } from 'elements';
import api from 'service/api';

import { PersonContainer } from './styled';
import ImagePerson from './ImagePerson';

const Person = ({ user }) => {
  const [commited, setCommited] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: total_count } = await api.get(`/search/commits?q=author:${user.login}+author-date:2019-07-08`)
      if (total_count !== 0) {
        setCommited(true);
      }
    })()
  }, []);

  return (
    <PersonContainer>
      <Wrapper key={user.id} margin="5px 15px">
        <ImagePerson src={user.avatar_url} id={user.id} commited={commited} />
        <h4>{user.name}</h4>
      </Wrapper>
    </PersonContainer>
  );
};

export default Person;
