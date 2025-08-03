import React from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <h1>Atelier Wuf Wuf</h1>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={currentPage === 'shop' ? 'active' : ''} 
              onClick={() => setCurrentPage('shop')}
            >
              Shop
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'projects' ? 'active' : ''} 
              onClick={() => setCurrentPage('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'contact' ? 'active' : ''} 
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 