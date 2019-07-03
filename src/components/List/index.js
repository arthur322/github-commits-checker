import React from "react";
import { useSelector } from "react-redux";

import { Container, Image, ItemWrapper } from "./styled";
import { Wrapper } from "../../elements";

const List = ({ children }) => {
  const usersList = useSelector(({ users }) => users.users);

  return (
    <Container>
      <ItemWrapper>
        {usersList.map(user => (
          <Wrapper key={user.id} margin="5px 15px">
            <Image src={user.avatar_url} />
            <div>{user.name}</div>
          </Wrapper>
        ))}
      </ItemWrapper>
    </Container>
  );
};
export default List;
