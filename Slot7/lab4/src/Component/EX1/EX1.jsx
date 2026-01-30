import { useReducer } from "react";
import { Button, Container } from "react-bootstrap";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: Math.max(0, state.count - 1) };
    default:
      return state;
  }
}

export default function EX1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="mb-4">
      <h4>Exercise 1</h4>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
      <span className="mx-3">{state.count}</span>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
    </Container>
  );
}
