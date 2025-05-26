// App.jsx
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#menu">HOME PAGE</a></li>
            <li><a href="#menu">O NAMA</a></li>
            <li><a href="#gallery">POSLASTICE</a></li>
            <li><a href="#contact">KONTAKT</a></li>
            <li><a href="#contact">LOKACIJA</a></li>
          </ul>
        </nav>
        <div className="hero">
          



        </div>
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

      <footer className="footer">
        <p>&copy; 2025 Palancikara Njam Njam. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}
