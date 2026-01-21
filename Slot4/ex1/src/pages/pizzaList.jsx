
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from '../Component/PizzaCard';
import { pizzaList } from '../data/pizzaList';

function PizzaList() {
  return (
    <Container className="py-5">
      <Row>
        {pizzaList.map((pizza) => (
          <Col key={pizza.id} md={4} className="mb-4">
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PizzaList;
