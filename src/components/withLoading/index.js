import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styled";

const withLoading = Component => props => {
  const usersLoading = useSelector(({ users }) => users.loading);
  const commitsLoading = useSelector(({ commits }) => commits.loading);

  return (
    <>
      {usersLoading && <Container>Carregando usuários e commits...</Container>}
      {commitsLoading && <Container>Carregando commits...</Container>}
      <Component {...props} />
    </>
  );
};

export default withLoading;
