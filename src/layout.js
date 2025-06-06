// Layout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./App.css";

const Layout = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li><HashLink smooth to="/#">HOME PAGE</HashLink></li>
            <li><HashLink smooth to="/#o-nama">O NAMA</HashLink></li>
            <li><Link to="/poslastice">POSLASTICE</Link></li>
            <li><HashLink smooth to="/#contact">KONTAKT</HashLink></li>
            <li><HashLink smooth to="/#lokacija">LOKACIJA</HashLink></li>

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
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2025 Palačinkara Njam Njam. Sva prava zadržana.</p>
      </footer>
    </>
  );
};

export default Layout;
