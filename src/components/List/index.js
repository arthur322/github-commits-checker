import React from "react";
import { useSelector } from "react-redux";

import { Container, Image, ItemWrapper } from "./styled";

const List = ({ children }) => {
  const usersList = useSelector(({ users }) => users.users);

  return (
    <Container>
      <ItemWrapper>
        {usersList.map(user => (
          <div key={user.id}>
            <Image src={user.avatar_url} />
            <div>{user.name}</div>
          </div>
        ))}
      </ItemWrapper>
    </Container>
  );
};
export default List;
