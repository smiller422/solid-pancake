import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './components/pages/About.js';
import Projects from './pages/Projects';
import Login from './Login';
import Contact from './pages/Contact';


// import Footer from './footer/index.js';
// import ContactForm from './ContactForm';

export default function LinksContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Login />;
    
  };

  const handlePageChange = (page) => {setCurrentPage(page);};

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {currentPage === 'Contact' && <ContactForm />} */}

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
} 
