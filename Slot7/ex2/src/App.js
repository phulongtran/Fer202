import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./Component/EX5";
import QuantityControl from "./Component/EX1";
import OrderProcessModal from "./Component/EX2";
import ProductForm from "./Component/EX3";
import TodoList from "./Component/EX4";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <div className="container mt-4">
        <Routes>
          <Route path="/ex1" element={<QuantityControl />} />
          <Route path="/ex2" element={<OrderProcessModal />} />
          <Route path="/ex3" element={<ProductForm />} />
          <Route path="/ex4" element={<TodoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
