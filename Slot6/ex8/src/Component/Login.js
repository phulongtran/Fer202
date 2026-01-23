import "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="brand">
          <div className="logo">🍃</div>
          <h3>Cultivate Simplicity</h3>
          <p>
            Experience a more harmonious way to manage your workflow with our
            natural, intuitive interface.
          </p>
        </div>

        <div className="art-box"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <h2>Welcome back</h2>
        <p className="subtitle">
          Enter your credentials to access your sanctuary.
        </p>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@company.com" />
          </Form.Group>

          <Form.Group className="mb-2">
            <div className="password-row">
              <Form.Label>Password</Form.Label>
              <span className="forgot">Forgot password?</span>
            </div>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Keep me signed in for 30 days"
            className="mb-3"
          />

          <Button className="login-btn" type="submit">
            Sign In
          </Button>

          <div className="divider">OR CONTINUE WITH</div>

          <div className="social">
            <Button variant="outline-secondary">Google</Button>
            <Button variant="outline-secondary">Facebook</Button>
          </div>

          <p className="signup">
            Don’t have an account? <span>Create an account</span>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
