import React, { useState, useEffect } from 'react';
import { Wrapper } from 'elements';
import api from 'service/api';

import { PersonContainer } from './styled';
import ImagePerson from './ImagePerson';

const Person = ({ user }) => {
  const [commited, setCommited] = useState(false);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/search/commits?q=author:${user.login}+author-date:2019-07-08`)
      setCommits(data.total_count);
      if (data.total_count !== 0) {
        setCommited(true);
      }
    })()
  }, []);

  return (
    <PersonContainer>
      <Wrapper key={user.id} margin="5px 15px">
        <ImagePerson src={user.avatar_url} id={user.id} commited={!commited} />
        <h4>{user.name} ({ commits })</h4>
      </Wrapper>
    </PersonContainer>
  );
};

export default Person;
