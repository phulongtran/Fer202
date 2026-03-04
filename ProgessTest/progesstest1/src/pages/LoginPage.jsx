import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import MessageModal from "../components/MessageModal";
import { getAccounts } from "../services/accountService";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [identifierError, setIdentifierError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Reset errors
    setIdentifierError("");
    setPasswordError("");

    let isValid = true;

    // Validate empty fields
    if (!identifier.trim()) {
      setIdentifierError("Username or Email is required.");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await getAccounts();

      const user = res.data.find(
        (acc) =>
          (acc.username === identifier ||
            acc.email === identifier) &&
          acc.password === password
      );

      if (!user) {
        alert("Invalid username/email or password!");
        return;
      }

      if (user.role !== "admin") {
        alert("Access denied. Only admin users can log in.");
        return;
      }

      if (user.status === "locked") {
        alert("Account is locked. Please contact admin.");
        return;
      }

      // Success
      setCurrentUser(user);
      setShowModal(true);

    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Please try again.");
    }
  };

  const handleContinue = () => {
    setShowModal(false);
    navigate("/accounts");
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <LoginForm
        identifier={identifier}
        password={password}
        identifierError={identifierError}
        passwordError={passwordError}
        setIdentifier={setIdentifier}
        setPassword={setPassword}
        onLogin={handleLogin}
      />

      <MessageModal
        show={showModal}
        username={identifier}
        onClose={handleContinue}
      />
    </Container>
  );
};

export default LoginPage;