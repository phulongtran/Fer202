// Trang giới thiệu (Home) chứa thông tin tác giả 
import React from 'react';
import { Container, Card } from 'react-bootstrap';
function Home() {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>1. Thông tin tác giả </Card.Title>
          <Card.Text>
          * <strong>Mã SV:</strong> DE180177 <br/>
          * <strong>Họ tên:</strong> longtp <br/>
          * <strong>GitHub:</strong> <a href="https://github.com/phulongtran/Fer202.git">Link Github</a>
        </Card.Text>
        <hr />
        <Card.Title>2. Cấu trúc project </Card.Title>
        <p>Project được tổ chức theo cấu trúc Component-based với React-Bootstrap.</p>
      </Card.Body>
    </Card>
  </Container>
);
}

export default Home;