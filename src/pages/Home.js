import React from "react";
import { Container, Row } from "react-bootstrap";
import CardPost from "../components/CardPost";

function Home(props) {
  return (
    <div>
      <h3>Latest Post</h3>
      <Container>
        <Row>
          <CardPost />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
