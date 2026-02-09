// Sử dụng SlideBar.jsx trong App.js:
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPizzar from './components/NavBarPizzar';
import DangKyForm from './components/DangKyForm';
import Home from './components/Home';
import SlideBar from './components/SlideBar';
import NewPage from './pages/NewPage';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import LazyDemo from './components/LazyDemo';
import AllUsers from './components/AllUsers';
import AllPosts from './components/AllPosts';

function App() {
  return (
    <Router>
      {/* Thanh điều hướng cho ứng dụng đặt pizza */}
      <NavBarPizzar />
      <SlideBar />
    {/*Điều hướng ứng dụng đặt pizza với các liên kết đến các trang khác nhau*/}
    <Routes>
      <Route path="/" element={<Home />} />      <Route path="/users" element={<AllUsers />} />
      <Route path="/posts" element={<AllPosts />} />      <Route path="/news" element={<NewPage />} />
    <Route path="/lazy-loading" element={<LazyDemo />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/register" element={<DangKyForm />} />
      <Route path="/contact" element={<Contact />} />
    
    </Routes>   
  </Router> 
  );
}

export default App;