import React from 'react';
import { useSelector } from 'react-redux';
// import Calendar from 'react-calendar';

import Person from '../Person';
import { Container, ItemWrapper } from './styled';

const List = ({ children }) => {
  const usersList = useSelector(({ users }) => users.users);

  return (
    <Container>
      <ItemWrapper>
        {usersList.length ? (
          usersList.map(user => <Person key={user.id} user={user} />)
        ) : (
          <p>Tente adicionar o primeiro usuário!</p>
        )}
      </ItemWrapper>
      {/* <Calendar value={new Date()} /> */}
    </Container>
  );
};
export default List;
