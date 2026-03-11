import React, { useEffect, useState } from "react";
import { addExpense, updateExpense } from "../services/api";

function AddExpenseForm({ reload, editExpense, setEditExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editExpense) {
      setName(editExpense.name);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
      setDate(editExpense.date);
    }
  }, [editExpense]);

  const resetForm = () => {
    setName("");
    setAmount("");
    setCategory("");
    setDate("");
    setEditExpense(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      name,
      amount: Number(amount),
      category,
      date,
    };

    if (editExpense) {
      await updateExpense(editExpense.id, newExpense);
    } else {
      await addExpense(newExpense);
    }

    reload();
    resetForm();
  };

  return (
    <div className="card p-3">
      <h5>{editExpense ? "Edit Expense" : "Add Expense"}</h5>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="form-control mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <input
          type="date"
          className="form-control mb-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="button" className="btn btn-secondary w-100 mb-2" onClick={resetForm}>
          Reset
        </button>

        <button type="submit" className="btn btn-primary w-100">
          {editExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default AddExpenseForm;