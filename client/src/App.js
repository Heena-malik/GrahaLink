import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Assistant from "./Components/AiAssistant/Assistant";
import Header from './Components/Header';
import Footer from './Components/Footer';


import Home from './pages/Home';
import FreeKundli from './pages/FreeKundli';
import KundliCompatibility from './pages/KundliCompatibility';
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
          <Route path="/KundliCompatibility" element={<KundliCompatibility />} />
           <Route path="/signin" element={<SignIn />} /> 
            <Route path="/register" element={<Register />} /> 
        </Routes>
         <Assistant />

      </main>

      <Footer />
    </Router>
  );
}

export default App;
