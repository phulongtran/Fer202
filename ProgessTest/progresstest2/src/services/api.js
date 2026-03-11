import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001"
});

export const loginUser = (username, password) =>
  API.get(`/users?username=${username}&password=${password}`);

export const getExpenses = () =>
  API.get(`/expenses`);

export const addExpense = (data) =>
  API.post("/expenses", data);

export const deleteExpense = (id) =>
  API.delete(`/expenses/${id}`);

export const updateExpense = (id, data) =>
  API.put(`/expenses/${id}`, data);