import { useReducer } from "react";
import { Form, Button, Container } from "react-bootstrap";

const initialState = {
  name: "",
  price: "",
  category: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export default function EX3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <Container className="mb-4">
      <h4>Exercise 3</h4>

      <Form>
        <Form.Group className="mb-2">
          <Form.Control
            name="name"
            placeholder="Tên sản phẩm"
            value={state.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            name="price"
            type="number"
            placeholder="Giá"
            value={state.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            name="category"
            placeholder="Danh mục"
            value={state.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="me-2">Lưu</Button>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "RESET_FORM" })}
        >
          Reset
        </Button>
      </Form>
    </Container>
  );
}
