import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import Home from './pages/Home';
import SignIn from './pages/sign-In';
import Register from './pages/Register';
import FreeKundli from './pages/FreeKundli';
import KundliCompatibility from './pages/KundliCompatibility';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/freeKundli" element={<FreeKundli />} />
        <Route path="/kundli-compatibility" element={<KundliCompatibility />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
