import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Arjun from './pages/Arjun';
import LoveGuru from './pages/LoveGuru';
import Swami from './pages/Swami';
import Ananya from './pages/Ananya';
import Krishnam from './pages/Krishnam';
import Home from './pages/Home';
import FreeKundli from './pages/FreeKundli';
import KundliCompatibility from './pages/KundliCompatibility';
import SignIn from './pages/sign-In';
import Register from './pages/Register';
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
          <Route path="/astro/arjun" element={<Arjun />} />
           <Route path="/astro/LoveGuru" element={<LoveGuru />} />
            <Route path="/astro/Swami" element={<Swami />} />
             <Route path="/astro/Ananya" element={<Ananya />} />
             <Route path="/astro/Krishnam" element={<Krishnam />} />
              
        </Routes>
         

      </main>

      <Footer />
    </Router>
  );
}

export default App;
