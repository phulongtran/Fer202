import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./LoginForm.css";

const LoginForm = () => {
  const { login, logout, error, isAuthenticated, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [formError, setFormError] = useState("");

  const validate = () => {
    if (!formData.username.trim()) {
      return "Username không được để trống";
    }

    if (!formData.password.trim()) {
      return "Password không được để trống";
    }

    if (formData.password.length < 6) {
      return "Password phải >= 6 ký tự";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();

    if (validationError) {
      setFormError(validationError);
      return;
    }

    setFormError("");
    login(formData.username, formData.password);
  };

  // ==============================
  // Nếu đã đăng nhập
  // ==============================
  if (isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h3 className="login-title">Thông tin Admin</h3>

          <div className="mb-3">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Status:</strong> {user.status}</p>
          </div>

          <button
            className="btn btn-danger w-100 login-btn"
            onClick={logout}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    );
  }

  // ==============================
  // Nếu chưa đăng nhập
  // ==============================
  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Admin Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control login-input"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control login-input"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 login-btn">
            Login
          </button>
        </form>

        {formError && (
          <p className="text-danger login-error">{formError}</p>
        )}

        {error && (
          <p className="text-danger login-error">{error}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;