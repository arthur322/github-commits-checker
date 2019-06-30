import React from "react";

import Form from "../../components/Form";
import List from "../../components/List";
import Loading from "../../components/withLoading";

const Main = () => {
  return (
    <div className="App">
      <h1>Quem commitou hoje??</h1>
      <h2>
        Adicione usuários do github para monitorar a frquência de commits!
      </h2>
      <Form />
      <List />
      <Loading />
    </div>
  );
};

export default Main;
