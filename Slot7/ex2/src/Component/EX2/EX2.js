import { Button, Modal, Card } from "react-bootstrap";
import { useState } from "react";

function OrderProcessModal() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleConfirm = () => {
    alert("Xử lý đơn hàng thành công!");
    setIsShowModal(false);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 2: Order Processing</Card.Title>
        <Card.Text className="text-muted">
          Admin confirms order before sending to warehouse
        </Card.Text>

        <Button variant="primary" onClick={() => setIsShowModal(true)}>
          Xử lý đơn hàng
        </Button>

        <Modal
          show={isShowModal}
          onHide={() => setIsShowModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho
            không?
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsShowModal(false)}>
              Hủy
            </Button>
            <Button variant="success" onClick={handleConfirm}>
              Xác nhận
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default OrderProcessModal;
