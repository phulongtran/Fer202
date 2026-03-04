import { Form, Button, Card } from "react-bootstrap";

const LoginForm = ({
  identifier,
  password,
  identifierError,
  passwordError,
  setIdentifier,
  setPassword,
  onLogin,
}) => {
  return (
    <Card className="p-4 shadow" style={{ width: "400px" }}>
      <h3 className="text-center mb-3">Login</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username or email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username or email"
            value={identifier}
            isInvalid={!!identifierError}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {identifierError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            isInvalid={!!passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex gap-2">
          <Button className="w-100" onClick={onLogin}>
            Login
          </Button>
          <Button variant="secondary" className="w-100">
            Cancel
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default LoginForm;