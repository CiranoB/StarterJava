import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
