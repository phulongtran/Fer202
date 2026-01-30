import { useReducer, useState } from "react";
import { Button, Form, Container, ListGroup } from "react-bootstrap";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE_TASK":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

export default function EX4() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  return (
    <Container className="mb-4">
      <h4>Exercise 4</h4>

      <Form.Control
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc"
      />
      <Button className="mt-2" onClick={addTask}>
        Thêm
      </Button>

      <ListGroup className="mt-3">
        {tasks.map((t) => (
          <ListGroup.Item key={t.id}>
            {t.text}
            <Button
              variant="danger"
              size="sm"
              className="float-end"
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: t.id })
              }
            >
              Xóa
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
