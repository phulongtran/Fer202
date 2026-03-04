import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccountById } from "../services/accountService";
import { Container, Button } from "react-bootstrap";

const AccountDetailPage = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAccountById(id).then((res) =>
      setAccount(res.data)
    );
  }, [id]);

  if (!account) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <h3>Account Detail</h3>

      <img src={account.avatar} width="100" alt="" />
      <p>Username: {account.username}</p>
      <p>Email: {account.email}</p>
      <p>Role: {account.role}</p>
      <p>Status: {account.status}</p>

      <Button onClick={() => navigate("/accounts")}>
        Back to Lists
      </Button>
    </Container>
  );
};

export default AccountDetailPage;