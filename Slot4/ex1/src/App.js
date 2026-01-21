import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './Component/navbar';
import Footer from './Component/Footer';
import HeroCarousel from './Component/HeroCarousel';

import PizzaList from './pages/pizzaList';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <HeroCarousel />

      {/* MAIN CONTENT – giữ nền tối */}
      <div style={{ backgroundColor: '#2b2b2b', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<PizzaList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer myProfile={{
        avatar: 'logo192.png',
        name: 'Long TP',
        email: 'longtpde180177@fpt.edu.vn'
      }} />
    </Router>
  );
}

export default App;
