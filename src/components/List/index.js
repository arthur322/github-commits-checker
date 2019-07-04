import React from "react";
import { useSelector } from "react-redux";

import ImagePerson from "../ImagePerson";
import { Wrapper } from "../../elements";
import { Container, ItemWrapper } from "./styled";

const List = ({ children }) => {
  const usersList = useSelector(({ users }) => users.users);

  return (
    <Container>
      <ItemWrapper>
        {usersList.map(user => (
          <Wrapper key={user.id} margin="5px 15px">
            <ImagePerson src={user.avatar_url} id={user.id} />
            <h4>{user.name}</h4>
          </Wrapper>
        ))}
      </ItemWrapper>
    </Container>
  );
};
export default List;
