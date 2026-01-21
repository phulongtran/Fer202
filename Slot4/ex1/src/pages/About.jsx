import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section
      className="py-5 text-white"
      style={{ backgroundColor: '#2b2b2b', minHeight: '100vh' }}
    >
      <Container>
        {/* Title */}
        <h2 className="text-center mb-5 fw-bold">About Us</h2>

        {/* Story + Mission */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <h4 className="mb-3">Our Story</h4>
            <p className="text-light">
              Pizza House was founded with a passion for authentic Italian pizza.
              From fresh dough to premium toppings, we focus on quality in every slice.
            </p>
          </Col>

          <Col md={6} className="mb-4">
            <h4 className="mb-3">Our Mission</h4>
            <p className="text-light">
              Our mission is to bring people together through delicious food,
              friendly service, and a warm dining experience.
            </p>
          </Col>
        </Row>

        {/* Values */}
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <h5 className="text-warning">Fresh Ingredients</h5>
            <p className="text-light">Only the best quality products</p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="text-warning">Expert Chefs</h5>
            <p className="text-light">Years of professional experience</p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="text-warning">Made With Love</h5>
            <p className="text-light">Every pizza is crafted with care</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
