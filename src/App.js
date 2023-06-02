

import React, { useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Home from './components/pages/Home.js';
import Footer from './components/Footer/index.js';
import Login from './components/Login.js';
import Contact from './components/pages/Contact.js';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
   
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <header className="bg-white p-4">
          {/* <h1 className="text-2xl font-bold text-center">app.js h1</h1> */}
        </header>
        <main className="container mx-auto p-4">
          {/* <p className="text-lg">app.js p tag</p> */}
          <Routes>
            <Route exact path="/login" component={Login} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/contact" component={Contact} />
          </Routes>
        </main>
        <Footer />
        <Login />
      
      </div>
    </Router>
  </div>
  );
}

export default App;