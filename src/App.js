// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import { HashLink as HashLink } from "react-router-hash-link";

import Login from "./login";
import Register from "./register";
import Poslastice from "./poslastice";
import Admin from "./Admin"; 
import "./App.css";

function AppContent() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
  const RequireAdmin = ({ children }) => {
    if (!user || user.role !== "Admin") {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">HOME PAGE</Link></li>
            <li><HashLink smooth to="#o-nama">O NAMA</HashLink></li>
            <li><Link to="/poslastice">POSLASTICE</Link></li>
            <li><HashLink smooth to="#contact">KONTAKT</HashLink></li>

            {user ? (
              <>
                <li><span>Dobrodošao, {user.username} ({user.role})</span></li>
                <li><a href="#" onClick={() => { localStorage.removeItem("loggedInUser"); window.location.reload(); }}>ODJAVA</a></li>
                {user.role === "Admin" && <li><Link to="/admin">ADMIN PANEL</Link></li>}
              </>
            ) : (
              <>
                <li><Link to="/login">PRIJAVA</Link></li>
                <li><Link to="/register">REGISTRACIJA</Link></li>
              </>
            )}
            <li><HashLink to="#lokacija">LOKACIJA</HashLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={
          <>
            <section id="o-nama" className="o-nama">
              <h2>O nama</h2>
              <p>
                Naš meni pažljivo je osmišljen kako bi zadovoljio različite ukuse,
                od tradicionalnih slatkih palačinki punjenih čokoladnim kremama, plazmom,
                orasima i voćem, do kiselkastih kombinacija za one koji više vole konkretne zalogaje.
                Posebno se ponosimo našim specijalitetima – wafflima, koji su osvojili srca mnogih gostiju i donijeli novu dimenziju slatkog uživanja.
                Svaka palačinka i waffle pripremaju se s pažnjom, od svježih i kvalitetnih sastojaka.
                Kod nas ništa nije "na brzinu" – svaka narudžba je posebna i svako posluženje ima svoju priču.
              </p>
            </section>

            <section id="lokacija" className="lokacija">
              <h3>Pronađite nas na ovoj lokaciji</h3>
              <img src="/images/Vector.png" alt="Vector" />
              <h2>Stara čaršija, Zenica 72 000</h2>
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
        } />

        <Route path="/poslastice" element={<Poslastice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={
          <RequireAdmin>
            <Admin />
          </RequireAdmin>
        } />

        {}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 Palačinkara Njam Njam. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
