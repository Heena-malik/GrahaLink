import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';


import Home from './pages/Home';
import FreeKundli from './pages/FreeKundli';
// import Contact from './pages/Contact';
import SignIn from './pages/sign-In';
import Register from './pages/Register'
function App() {
  return (
    <Router>
      <Header />

      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FreeKundli" element={<FreeKundli />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
           <Route path="/signin" element={<SignIn />} /> 
            <Route path="/register" element={<Register />} /> 
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
