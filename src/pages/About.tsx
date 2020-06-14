import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  return (
    <>
      <Container maxWidth="md">
        <h2>About</h2>
        <p>
          Reactの勉強用に作成したコンポーネントやライブラリを使用したサンプルを配置します。
        </p>
        <Button variant="contained" onClick={history.goBack}>
          Back
        </Button>
      </Container>
    </>
  );
};

export default About;
