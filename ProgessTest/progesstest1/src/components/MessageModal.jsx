import { Modal, Button } from "react-bootstrap";

const MessageModal = ({ show, username, onClose }) => {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome, <strong>{username}</strong>! Login successful.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onClose}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;