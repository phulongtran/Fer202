import React, { useState } from 'react';
import { Card, Badge, Button, Modal } from 'react-bootstrap';

function PizzaCard({ pizza }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* CARD */}
      <Card className="h-100 shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={pizza.image}
            alt={pizza.name}
            style={{ height: '220px', objectFit: 'cover' }}
          />

          {pizza.tags && pizza.tags.length > 0 && (
            <div className="position-absolute top-0 start-0 m-2">
              {pizza.tags.map((tag, index) => (
                <Badge
                  key={index}
                  bg={tag === 'Sale' ? 'warning' : 'success'}
                  className="me-1 text-dark fw-bold"
                  style={{
                    fontSize: '11px',
                    padding: '4px 8px',
                    textTransform: 'uppercase'
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Card.Body className="d-flex flex-column" style={{ padding: '20px' }}>
          <Card.Title style={{ fontSize: '18px', marginBottom: '10px' }}>
            {pizza.name}
          </Card.Title>

          <div className="mt-auto">
            <div className="mb-3">
              {pizza.oldPrice && (
                <span className="text-decoration-line-through text-muted me-2">
                  ${pizza.oldPrice}
                </span>
              )}
              <span
                className="fw-bold"
                style={{
                  fontSize: '18px',
                  color: pizza.oldPrice ? '#ffc107' : '#000'
                }}
              >
                ${pizza.price}
              </span>
            </div>

            <div className="d-flex gap-2">
              <Button
                className="w-50"
                style={{
                  padding: '10px',
                  fontWeight: '500',
                  backgroundColor: '#ffc107',
                  border: 'none',
                  color: '#fff'
                }}
                onClick={handleShow}
              >
                View Detail
              </Button>

              <Button
                variant="dark"
                className="w-50"
                style={{ padding: '10px', fontWeight: '500' }}
              >
                Buy
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="img-fluid rounded"
              />
            </div>

            <div className="col-md-6">
              {pizza.tags && pizza.tags.map((tag, index) => (
                <Badge
                  key={index}
                  bg={tag === 'Sale' ? 'warning' : 'success'}
                  className="me-2 text-dark"
                >
                  {tag}
                </Badge>
              ))}

              <h4 className="mt-3">${pizza.price}</h4>

              {pizza.description && (
                <p className="text-muted mt-2">
                  {pizza.description}
                </p>
              )}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark">Buy</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PizzaCard;
