import React from "react";

import Form from "components/Form";
import List from "components/List";
import Footer from "components/Footer";
import withLoading from "components/withLoading";

import { Container, Wrapper } from "elements";
import { ContentWrapper } from "./styled";

const Main = () => {
  return (
    <Container className="App">
      <ContentWrapper>
        <h1>Quem commitou hoje???</h1>
        <h2>
          Adicione usuários do github para monitorar a frequência de commits!
        </h2>
      </ContentWrapper>
      <Wrapper margin="30px 0px">
        <Form />
      </Wrapper>
      <List />
      <Footer />
    </Container>
  );
};

export default withLoading(Main);
