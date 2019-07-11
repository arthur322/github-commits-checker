import React, { useState, useEffect } from "react";
import api from "service/api";

import { PersonContainer, PersonWrapper } from "./styled";
import ImagePerson from "./ImagePerson";

const Person = ({ user }) => {
  const [commited, setCommited] = useState(false);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    (async () => {
      const tzoffset = new Date().getTimezoneOffset() * 60000;
      const todayDate = new Date(Date.now() - tzoffset)
        .toISOString()
        .slice(0, 10);

      const { data } = await api.get(
        `/search/commits?q=author:${user.login}+committer-date:${todayDate}`
      );

      setCommits(data.total_count);
      if (data.total_count !== 0) {
        setCommited(true);
      }
    })();
  }, [user]);

  return (
    <PersonContainer>
      <PersonWrapper key={user.id}>
        <ImagePerson src={user.avatar_url} id={user.id} commited={!commited} />
        <h4>
          {user.name} ({commits})
        </h4>
      </PersonWrapper>
    </PersonContainer>
  );
};

Person.defaultProps = {
  user: { login: "" }
};

export default Person;
