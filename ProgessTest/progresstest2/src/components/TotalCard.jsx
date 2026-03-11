import React from "react";

function TotalCard({ expenses = [] }) {

  const total = expenses.reduce((sum, e) => {
    return sum + parseInt(e.amount || 0);
  }, 0);

  return (
    <div className="card p-3">
      <h6>Total of Expenses</h6>
      <h4>{total.toLocaleString("vi-VN")} đ</h4>
    </div>
  );
}

export default TotalCard;