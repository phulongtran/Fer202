import axios from "axios";

const API_URL = "http://localhost:3001/accounts";

export const getAccounts = () => axios.get(API_URL);

export const getAccountById = (id) =>
  axios.get(`${API_URL}/${id}`);

export const updateAccount = (id, data) =>
  axios.patch(`${API_URL}/${id}`, data);