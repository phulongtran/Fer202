import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import "./FlightBookingForm.css";

function FlightBookingForm() {
  return (
    <div className="booking-wrapper">
      {/* Thanh vàng trên */}
      <div className="top-bar">
        <span className="close-icon">×</span>
      </div>

      {/* Tiêu đề */}
      <h2 className="form-title">Form đặt vé máy bay</h2>

      <Form className="px-3">
        {/* Họ tên */}
        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <PersonFill />
            </InputGroup.Text>
            <Form.Control placeholder="Họ tên" />
            <InputGroup.Text>vnd</InputGroup.Text>
          </InputGroup>
          <Form.Text className="text-muted">
            Phải nhập 5 ký tự, in hoa...
          </Form.Text>
        </Form.Group>

        {/* Địa chỉ */}
        <Form.Group className="mb-3">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control />
          <Form.Text className="text-muted">
            Phải nhập 5 ký tự, in hoa...
          </Form.Text>
        </Form.Group>

        {/* Đi từ / Đến */}
        <Row className="mb-3">
          <Col>
            <Form.Label>Đi từ</Form.Label>
            <Form.Select>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              <option>TP.HCM</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Đến</Form.Label>
            <Form.Select>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              <option>TP.HCM</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Checkbox */}
        <Form.Group className="mb-3">
          <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
          <Form.Check type="checkbox" label="Đi" />
          <Form.Check type="checkbox" label="Về" />
        </Form.Group>

        {/* Nút */}
        <div className="d-grid">
          <Button variant="primary">Đặt vé</Button>
        </div>
      </Form>
    </div>
  );
}

export default FlightBookingForm;
