// App.jsx
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route,  useLocation } from 'react-router-dom';
import Poslastice from './poslastice';
import { HashLink as Link } from 'react-router-hash-link';


function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="header">
                <nav className="nav">
                  <ul className="nav-links">
                    <li><a href="/">HOME PAGE</a></li>
                    <li><Link smooth to="#menu">O NAMA</Link></li>
                    <li><Link to="/poslastice">POSLASTICE</Link></li>
                    <li><Link smooth to href="/#contact">KONTAKT</Link></li>
                    <li><a href="/#contact">LOKACIJA</a></li>
                  </ul>
                </nav>
              </header>

              <section id="menu" className="menu">
                <h2>Naš meni</h2>
                <div className="menu-items">
                  <div className="menu-item">
                    <h3>Nutella palačinka</h3>
                    <p>Kremasta Nutella sa svježim voćem.</p>
                  </div>
                  <div className="menu-item">
                    <h3>Kinder Bueno palačinka</h3>
                    <p>Kinder čokolada i hrskavi dodatci.</p>
                  </div>
                </div>
              </section>

              <section id="gallery" className="gallery">
                <h2>Galerija</h2>
                <div className="gallery-images">
                  <img src="/images/palacinka1.jpg" alt="Palačinka 1" />
                  <img src="/images/palacinka2.jpg" alt="Palačinka 2" />
                </div>
              </section>

              <section id="contact" className="contact">
                <h2>Kontaktirajte nas</h2>
                <form>
                  <input type="text" placeholder="Vaše ime" required />
                  <input type="email" placeholder="Vaš email" required />
                  <textarea placeholder="Vaša poruka" required></textarea>
                  <button type="submit">Pošalji</button>
                </form>
              </section>
            </>
          }
        />
        <Route path="/poslastice" element={<Poslastice />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 Palancikara Njam Njam. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}

// Glavni App s Routerom
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
