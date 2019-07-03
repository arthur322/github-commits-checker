import React from "react";

import Form from "../../components/Form";
import List from "../../components/List";
import withLoading from "../../components/withLoading";

import { Container, Wrapper } from "../../elements";

const Main = () => {
  return (
    <Container className="App">
      <h1>Quem commitou hoje??</h1>
      <h2>
        Adicione usuários do github para monitorar a frequência de commits!
      </h2>
      <Wrapper margin="30px">
        <Form />
      </Wrapper>
      <List />
    </Container>
  );
};

export default withLoading(Main);
