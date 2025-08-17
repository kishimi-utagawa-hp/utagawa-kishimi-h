import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Poetry from './components/pages/Poetry';
import Gallery from './components/pages/Gallery';
import Performance from './components/pages/Performance';
import Profile from './components/pages/Profile';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
