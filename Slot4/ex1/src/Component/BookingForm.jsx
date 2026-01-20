import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted!');
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Book a Table</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
        </Form.Group>
        <Button variant="primary" type="submit">Submit Booking</Button>
      </Form>
    </Container>
  );
}

export default BookingForm;