import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

function LoginForm({ onLogin }) {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = (e)=>{

    e.preventDefault();

    if(!username || !password){
      setError("Username and password are required");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    onLogin(username,password);
  }

  return (
    <Card style={{width:"400px",margin:"100px auto"}}>

      <Card.Body>

        <h3 className="text-center">Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e)=>setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="w-100" type="submit">
            Login
          </Button>

        </Form>

      </Card.Body>

    </Card>
  );
}

export default LoginForm;