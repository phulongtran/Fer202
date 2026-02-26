import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

import LightSwitch from "./components/LightSwitch";
import CounterComponent from "./components/CounterComponent";
import LoginForm from "./components/LoginForm";

import "bootstrap/dist/css/bootstrap.min.css";


// ==============================
// Nội dung chính
// ==============================
function MainContent() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { theme } = useTheme();

  // Nếu chưa login → chỉ hiện form
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: theme === "light" ? "#ffffff" : "#121212",
        color: theme === "light" ? "#000000" : "#ffffff",
        transition: "all 0.3s ease"
      }}
    >
      <CounterComponent />
      <LightSwitch />

      {/* Thông tin user */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: theme === "light" ? "#ffffff" : "#1f1f1f",
          color: theme === "light" ? "#000000" : "#ffffff",
          borderRadius: "10px",
          border: theme === "light"
            ? "1px solid #ddd"
            : "1px solid #333",
          boxShadow: theme === "light"
            ? "0 2px 6px rgba(0,0,0,0.1)"
            : "0 2px 6px rgba(0,0,0,0.6)",
          transition: "all 0.3s ease"
        }}
      >
        <h4>Thông Tin Người Dùng</h4>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status}</p>
      </div>
    </div>
  );
}


// ==============================
// App chính
// ==============================
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;