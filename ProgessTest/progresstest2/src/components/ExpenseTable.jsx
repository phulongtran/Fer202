import React from "react";
import { deleteExpense } from "../services/api";

function ExpenseTable({ expenses, reload, onEdit }) {

  const handleDelete = async (id) => {
    await deleteExpense(id);
    reload();
  };

  return (
    <div className="card p-3">
      <h5>Expense Management</h5>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.amount} đ</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(expense)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ExpenseTable;