import { Table, Button, Badge } from "react-bootstrap";
import ListOfUsers from "./ListOfUsers";

function ManageUsers() {
  return (
    <div>
      <h4 className="mb-3">Manage Users</h4>

      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>UserName</th>
            <th>Status</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {ListOfUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="rounded-circle"
                />
              </td>
              <td>{user.username}</td>
              <td>
                <Badge bg={user.status === "Active" ? "success" : "danger"}>
                  {user.status}
                </Badge>
              </td>
              <td>{user.password}</td>
              <td>
                <Button size="sm" variant="warning" className="me-2">
                  Edit
                </Button>
                <Button size="sm" variant="danger">
                  Lock
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageUsers;
