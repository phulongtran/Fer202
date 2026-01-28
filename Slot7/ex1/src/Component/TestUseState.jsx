import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function TestUseState() {
    // state cho form (gõ thoải mái, không ảnh hưởng kết quả)
    const [formData, setFormData] = useState({
        username: "longtp",
        age: 22
    });

    // state cho dữ liệu đã submit
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        setResult(formData);
    };

    return (
        <Container
            className="mt-4"
            style={{
                maxWidth: '600px',
                border: '2px solid #dee2e6',
                borderRadius: '8px',
                padding: '20px'
            }}
        >
            <h2 className="text-center mb-4">Test useState Hook</h2>

            <Form>
                <Row className="mb-2">
                    <Col xs={3}>
                        <Form.Label>Username</Form.Label>
                    </Col>
                    <Col xs={9}>
                        <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col xs={3}>
                        <Form.Label>Age</Form.Label>
                    </Col>
                    <Col xs={9}>
                        <Form.Control
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col xs={3}></Col>
                    <Col xs={9}>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>

                {result && (
                    <Row>
                        <Col xs={3}>
                            <Form.Label>Result</Form.Label>
                        </Col>
                        <Col xs={9}>
                            <p className="mb-0">
                                My name is {result.username}, {result.age}
                            </p>
                        </Col>
                    </Row>
                )}
            </Form>
        </Container>
    );
}

export default TestUseState;
