import { useEffect, useState, useContext } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAccounts, updateAccount } from "../services/accountService";
import { AuthContext } from "../contexts/AuthContext";
import FilterBar from "../components/FilterBar";
import ConfirmModal from "../components/ConfirmModal";
import ToastMessage from "../components/ToastMessage";

const AccountListPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [role, setRole] = useState("All");
  const [sort, setSort] = useState("az");

  const [selected, setSelected] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const res = await getAccounts();
    setAccounts(res.data);
  };

  const filtered = accounts
    .filter(
      (acc) =>
        acc.username.toLowerCase().includes(search.toLowerCase()) ||
        acc.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((acc) => status === "All" || acc.status === status)
    .filter((acc) => role === "All" || acc.role === role)
    .sort((a, b) =>
      sort === "az"
        ? a.username.localeCompare(b.username)
        : b.username.localeCompare(a.username)
    );

  const handleLockUnlock = (account) => {
    if (account.id === currentUser.id) {
      alert("You cannot lock yourself.");
      return;
    }
    setSelected(account);
    setShowConfirm(true);
  };

  const confirmAction = async () => {
    const newStatus =
      selected.status === "active" ? "locked" : "active";

    await updateAccount(selected.id, { status: newStatus });

    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === selected.id ? { ...acc, status: newStatus } : acc
      )
    );

    setToast({
      show: true,
      message:
        newStatus === "locked"
          ? "Locked successfully"
          : "Unlocked successfully",
    });

    setShowConfirm(false);
  };

  return (
    <Container className="mt-4">
      <h3>Account List</h3>

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        role={role}
        setRole={setRole}
        sort={sort}
        setSort={setSort}
      />

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((acc) => (
            <tr key={acc.id}>
              <td>
                <img
                  src={acc.avatar}
                  alt=""
                  width="50"
                />
              </td>
              <td>{acc.username}</td>
              <td>{acc.email}</td>
              <td>{acc.role}</td>
              <td>{acc.status}</td>
              <td>
                <Button
                  size="sm"
                  onClick={() =>
                    navigate(`/accounts/${acc.id}`)
                  }
                >
                  View
                </Button>{" "}
                <Button
                  size="sm"
                  variant={
                    acc.status === "active"
                      ? "danger"
                      : "success"
                  }
                  onClick={() => handleLockUnlock(acc)}
                >
                  {acc.status === "active"
                    ? "Lock"
                    : "Unlock"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmModal
        show={showConfirm}
        message={
          selected &&
          (selected.status === "active"
            ? `Lock account ${selected.username}? The user cannot log in after this`
            : `Unlock account ${selected.username}?`)
        }
        onConfirm={confirmAction}
        onCancel={() => setShowConfirm(false)}
      />

      <ToastMessage
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </Container>
  );
};

export default AccountListPage;