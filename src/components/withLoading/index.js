import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styled";

const withLoading = Component => props => {
  const isLoading = useSelector(({ users }) => users.loading);

  return (
    <>
      {isLoading && <Container>Carregando...</Container>}
      <Component {...props} />
    </>
  );
};

export default withLoading;
