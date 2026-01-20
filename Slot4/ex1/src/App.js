import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Component/navbar';
import Footer from './Component/Footer';
import HeroCarousel from './Component/HeroCarousel';
import PizzaCard from './Component/PizzaCard';
import BookingForm from './Component/BookingForm';
import { Container, Row, Col } from 'react-bootstrap';
import { pizzaList } from './data/pizzaList';

function App() {
  return (
    <>
      <NavbarComponent />
      <HeroCarousel />
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#1a1a1a' }}>
        <Container className="flex-grow-1 py-5">
          <h2 className="text-center mb-5 text-white fw-normal" style={{ fontSize: '36px' }}>Our Menu</h2>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {pizzaList.map((pizza) => (
              <Col key={pizza.id}>
                <PizzaCard pizza={pizza} />
              </Col>
            ))}
          </Row>
        </Container>
        <BookingForm />
        <Footer myProfile={{
          avatar: '/images/ltb.jpg',
          name: 'Long TP',
          email: 'longtpde180177@fpt.edu.vn'
        }} />
      </div>
    </>
  );
}

export default App;