

import React from "react";


function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="w-full h-8 bg-slate-400 flex justify-between items-center">
      <h1 className="text-2xl text-white">Be Nice!</h1>
      <ul className="flex">
        <li className="nav-item">
          <a
            href="/login"
            onClick={() => handlePageChange("Login")}
            className={currentPage === "Login" ? "nav-link active" : "nav-link"}
          >
            Login
          </a>
        </li>
        <li className="nav-item mx-2.5">
          <a
            href="/about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item mx-2.5">
          <a
            href="/projects"
            onClick={() => handlePageChange("Projects")}
            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
           Featured Projects
          </a>
        </li>
        <li className="nav-item mx-2.5">
          <a
            href="/contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact Us
          </a>
        </li>
        {/* Add more nav links as needed */}
        <li className="nav-item mx-2.5">
          <a
            href="/services"
            // onClick={() => handlePageChange("Services")}
            className={currentPage === "Services" ? "nav-link active" : "nav-link"}
          >
            Services
          </a>
        </li>
      </ul>
    </div>
  );
}
 
export default Navbar;
