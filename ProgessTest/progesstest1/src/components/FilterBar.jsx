import { Row, Col, Form } from "react-bootstrap";

const FilterBar = ({
  search,
  setSearch,
  status,
  setStatus,
  role,
  setRole,
  sort,
  setSort,
}) => (
  <Row className="mb-3">
    <Col>
      <Form.Control
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Col>

    <Col>
      <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All Status</option>
        <option value="active">Active</option>
        <option value="locked">Locked</option>
      </Form.Select>
    </Col>

    <Col>
      <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="All">All Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </Form.Select>
    </Col>

    <Col>
      <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="az">Username A-Z</option>
        <option value="za">Username Z-A</option>
      </Form.Select>
    </Col>
  </Row>
);

export default FilterBar;