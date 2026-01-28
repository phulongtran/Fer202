import { Button, Form, InputGroup, Card } from "react-bootstrap";
import { useState } from "react";

function QuantityControl() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(quantity + 1);

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) setQuantity(value);
  };

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <Card.Title>Exercise 1: Product Quantity</Card.Title>
        <Card.Text className="text-muted">
          Adjust product quantity (cannot be less than 0)
        </Card.Text>

        <InputGroup style={{ maxWidth: "220px" }}>
          <Button variant="outline-danger" onClick={decrease}>
            −
          </Button>

          <Form.Control
            type="number"
            value={quantity}
            onChange={handleChange}
            className="text-center"
            min={0}
          />

          <Button variant="outline-success" onClick={increase}>
            +
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

export default QuantityControl;
