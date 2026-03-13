import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginForm from "./components/LoginForm";
import ExpenseDashboard from "./pages/ExpenseDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          {/* Login */}
          <Route path="/login" element={<LoginForm />} />

          {/* Dashboard */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ExpenseDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;