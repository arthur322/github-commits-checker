import React from "react";
import { useSelector } from "react-redux";

import { Container, Image } from "./styled";

const List = ({ children }) => {
  const usersList = useSelector(({ users }) => users.users);

  return (
    <Container>
      <ul>
        {usersList.map(user => (
          <>
            <Image src={user.avatar_url} />
            <li key={user.id}>{user.name}</li>
          </>
        ))}
      </ul>
    </Container>
  );
};
export default List;
