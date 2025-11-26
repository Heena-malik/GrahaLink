import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/sign-In';
import Register from './pages/Register';
import FreeKundli from './pages/FreeKundli';   // ✅ MISSING IMPORT FIXED

function App() {
  return (
    <Router>
      <Header />

      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* ✅ FIXED COMPONENT NAME */}
          <Route path="/freeKundli" element={<FreeKundli />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
