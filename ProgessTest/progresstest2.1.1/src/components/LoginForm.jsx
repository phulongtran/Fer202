import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import ModalConfirm from "./ModalConfirm";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setError] = useState({});
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    dispatch(
      loginThunk({
        username,
        password
      })
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      setShowModal(true);
    }
  }, [isAuthenticated]);

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError({});
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="shadow-sm">

            <Card.Header className="bg-white py-3">
              <h3 className="text-center mb-0">Login</h3>
            </Card.Header>

            <Card.Body className="p-4">

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin} noValidate>

                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={loading}
                    isInvalid={!!errors.username}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    isInvalid={!!errors.password}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>

                </Form.Group>

                <div className="d-flex gap-2 mt-4">

                  <Button
                    variant="primary"
                    type="submit"
                    className="flex-fill"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>

                  <Button
                    variant="secondary"
                    type="button"
                    className="flex-fill"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </Button>

                </div>

              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ModalConfirm
        show={showModal}
        title="Login Successful"
        message="You have successfully logged in. Redirecting to dashboard..."
        onConfirm={() => {
          setShowModal(false);
          navigate("/");
        }}
        onCancel={() => setShowModal(false)}
      />

    </Container>
  );
}

export default LoginForm;