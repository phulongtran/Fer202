import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TotalCard from "../components/TotalCard";
import AddExpenseForm from "../components/AddExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import Filter from "../components/Filter";

import {
  getExpenses,
  addExpense,
  deleteExpense,
  updateExpense
} from "../services/api";

function HomePage() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");

  const loadExpenses = async () => {
    const res = await getExpenses(user.id);
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAdd = async (data) => {

    await addExpense({
      ...data,
      userId: user.id
    });

    loadExpenses();
  };

  const handleDelete = async (id) => {

    await deleteExpense(id);

    loadExpenses();
  };

  const handleEdit = async (expense) => {

    const name = prompt("Edit name", expense.name);
    if (!name) return;

    await updateExpense(expense.id, {
      ...expense,
      name
    });

    loadExpenses();
  };

  const filteredExpenses = category
    ? expenses.filter((e) => e.category === category)
    : expenses;

  return (
    <>
      <Header />

      <div className="container mt-4">

        <div className="row mb-3">

          <div className="col-md-6">
            <TotalCard expenses={filteredExpenses} />
          </div>

          <div className="col-md-6">
            <Filter setCategory={setCategory} />
          </div>

        </div>

        <div className="row">

          <div className="col-md-4">
            <AddExpenseForm onAdd={handleAdd} />
          </div>

          <div className="col-md-8">

            <ExpenseTable
              expenses={filteredExpenses}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />

          </div>

        </div>

      </div>
    </>
  );
}

export default HomePage;