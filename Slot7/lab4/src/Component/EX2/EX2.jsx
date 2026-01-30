import { useReducer } from "react";
import { Button, Modal, Container } from "react-bootstrap";

const initialState = {
  isShowModal: false,
  isConfirmed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isShowModal: true };
    case "CLOSE_MODAL":
      return { ...state, isShowModal: false };
    case "CONFIRM_ORDER":
      return { isShowModal: false, isConfirmed: true };
    default:
      return state;
  }
}

export default function EX2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="mb-4">
      <h4>Exercise 2</h4>

      <Button onClick={() => dispatch({ type: "OPEN_MODAL" })}>
        Đặt hàng
      </Button>

      <Modal show={state.isShowModal}>
        <Modal.Header>
          <Modal.Title>Xác nhận đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn đặt hàng?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            Hủy
          </Button>
          <Button variant="success" onClick={() => dispatch({ type: "CONFIRM_ORDER" })}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>

      {state.isConfirmed && (
        <p className="text-success mt-3">✅ Đặt hàng thành công!</p>
      )}
    </Container>
  );
}
