import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import AppNavbar from "./Component/AppNavbar";
import FlightBookingForm from "./Component/FlightBookingForm";
import Login from "./Component/Login";
import ManageUsers from "./Component/ManageUsers";

/* Component bọc để dùng useNavigate */
function AppWrapper() {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const IDLE_TIME = 5000; // 10 giây

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      navigate("/login");
    }, IDLE_TIME);
  };

  useEffect(() => {
    // Các hành động được xem là "tác động"
    const events = ["mousemove", "keydown", "click", "scroll"];

    events.forEach(event =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer(); // khởi tạo timer lần đầu

    return () => {
      events.forEach(event =>
        window.removeEventListener(event, resetTimer)
      );
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <AppNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<FlightBookingForm />} />
          <Route path="/users" element={<ManageUsers />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
