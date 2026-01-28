import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Tên: ${form.name}\nGiá: ${form.price}\nDanh mục: ${form.category}`
    );
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>📝 Exercise 3: Product Form</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nhập tên sản phẩm"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Nhập giá"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Danh mục</Form.Label>
            <Form.Control
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Nhập danh mục"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Lưu sản phẩm
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProductForm;
