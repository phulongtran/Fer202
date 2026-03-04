import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AccountListPage from "../pages/AccountListPage";
import AccountDetailPage from "../pages/AccountDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/accounts" element={<AccountListPage />} />
      <Route path="/accounts/:id" element={<AccountDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;