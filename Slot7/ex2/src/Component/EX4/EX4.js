import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>✅ Exercise 4: Todo List</Card.Title>

        <div className="d-flex gap-2 mb-3">
          <Form.Control
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Nhập công việc..."
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <ListGroup>
          {todos.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {item}
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTodo(index)}
              >
                Xóa
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default TodoList;
