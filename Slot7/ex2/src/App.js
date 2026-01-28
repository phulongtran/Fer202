import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import QuantityControl from "./Component/EX1/EX1";
import OrderProcessModal from "./Component/EX2/EX2";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">LAB3</h2>

      <div className="d-flex flex-column gap-4">
        <QuantityControl />
        <OrderProcessModal />
      </div>
    </div>
  );
}

export default App;
