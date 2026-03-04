import { Toast } from "react-bootstrap";

const ToastMessage = ({ show, message, onClose }) => (
  <div className="position-fixed top-0 end-0 p-3">
    <Toast show={show} onClose={onClose} delay={2000} autohide>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  </div>
);

export default ToastMessage;