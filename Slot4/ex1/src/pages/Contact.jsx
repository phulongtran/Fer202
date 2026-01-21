import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section
      className="py-5 text-white"
      style={{ backgroundColor: '#2b2b2b', minHeight: '100vh' }}
    >
      <Container>
        {/* Title */}
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

        <Row>
          {/* Form */}
          <Col md={7} className="mb-4">
            <Form>
              <Form.Control
                className="mb-3"
                placeholder="Your Name"
              />
              <Form.Control
                className="mb-3"
                placeholder="Your Email"
              />
              <Form.Control
                as="textarea"
                rows={5}
                className="mb-3"
                placeholder="Message"
              />
              <Button variant="warning">Send Message</Button>
            </Form>
          </Col>

          {/* Info */}
          <Col md={5}>
            <h4 className="mb-3">Contact Information</h4>
            <p className="text-light">📍 123 Pizza Street</p>
            <p className="text-light">📞 +1 555 123 4567</p>
            <p className="text-light">✉ info@pizzahouse.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
