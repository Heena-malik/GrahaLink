import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './pages/Home';
<<<<<<< HEAD
import Contact from './pages/Contact';
import SignIn from './pages/sign-In';
import Register from './pages/Register';

// ⭐ NEW IMPORT
import KundliCompatibility from './pages/KundliCompatibility';
=======
import About from './pages/About';
import SignIn from './pages/sign-In';
import Register from './pages/Register';
import FreeKundli from './pages/FreeKundli';   // ✅ MISSING IMPORT FIXED
>>>>>>> 8492b78c47c654ee1fa494a3c9b3c4cbfc357ea8

function App() {
  return (
    <Router>
      <Header />

      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD

          {/* ⭐ New Kundli page */}
          <Route path="/kundli-compatibility" element={<KundliCompatibility />} />

          <Route path="/contact" element={<Contact />} />
=======
          <Route path="/about" element={<About />} />

          {/* ✅ FIXED COMPONENT NAME */}
          <Route path="/freeKundli" element={<FreeKundli />} />

>>>>>>> 8492b78c47c654ee1fa494a3c9b3c4cbfc357ea8
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
