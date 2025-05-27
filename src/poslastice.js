// src/Poslastice.js
import "./poslastice.css";
import { Link } from "react-router-dom"; // ✅ OVO JE BILO POTREBNO

export default function Poslastice() {
  return (
    <>
      <header className="headerposlastice">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="/">HOME PAGE</a></li>
            <li><a href="/#menu">O NAMA</a></li>
            <li><Link to="/poslastice">POSLASTICE</Link></li>
            <li>
  <Link to="/#contact">KONTAKT</Link>
</li>
            <li><a href="#contact">LOKACIJA</a></li>
          </ul>
        </nav>
      </header>

      <div style={{ padding: '40px' }}>
        <h1>Naše poslastice</h1>
        <p>Ovdje ide sadržaj o poslasticama 🍓🍫</p>
      </div>
    </>
  );
}
