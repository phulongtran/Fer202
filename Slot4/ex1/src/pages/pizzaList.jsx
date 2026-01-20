//pizzaList.jsx dùng để hiển thị danh sách các pizza, dữ liệu của các pizza được lấy từ pizzaList.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from '../Component/PizzaCard';
import { pizzaList } from '../data/pizzaList';
function PizzaList() {
    {/* sử dụng hàm  map để lặp qua mảng pizzaList, dữ liệu được chứa trong Container React-bootstrap */}
    return (
        <Container>
            <Row>
                {pizzaList.map(pizza => (
                    <Col key={pizza.id} md={4} className="mb-4">
                        <PizzaCard pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}