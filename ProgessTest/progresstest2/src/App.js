import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import Filter from "./components/Filter";
import TotalCard from "./components/TotalCard";
import { getExpenses } from "./services/api";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [editExpense, setEditExpense] = useState(null);

const loadData = async () => {
  const res = await getExpenses();
  setExpenses(res.data);
  setFilteredExpenses(res.data);
};

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (category === "") {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(
        expenses.filter((e) => e.category === category)
      );
    }
  }, [category, expenses]);

  return (
    <div>
      <Header />

      <div className="container mt-4">

        <div className="row mb-4">
          <div className="col-md-6">
            <TotalCard expenses={filteredExpenses} />
          </div>

          <div className="col-md-6">
            <Filter setCategory={setCategory} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <AddExpenseForm
              reload={loadData}
              editExpense={editExpense}
              setEditExpense={setEditExpense}
            />
          </div>

          <div className="col-md-8">
            <ExpenseTable
  expenses={filteredExpenses}
  reload={loadData}
  onEdit={setEditExpense}
/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;