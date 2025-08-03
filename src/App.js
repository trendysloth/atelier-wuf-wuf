import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('shop');

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects />;
      case 'shop':
        return <Shop />;
      case 'contact':
        return <Contact />;
      default:
        return <Shop />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
