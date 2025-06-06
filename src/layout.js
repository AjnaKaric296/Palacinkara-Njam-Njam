import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./App.css";

const Layout = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const location = useLocation();

  // Provjeri da li smo na home page-u (ruta: "/")
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header className={`header ${isHomePage ? "header-home" : ""}`}>
        <nav className="nav">
          <ul className="nav-links">
            <li><HashLink smooth to="/#">HOME PAGE</HashLink></li>
            <li><HashLink smooth to="/#o-nama">O NAMA</HashLink></li>
            <li><Link to="/poslastice">POSLASTICE</Link></li>
            <li><Link to="/kontakt">KONTAKT</Link></li>
            <li><Link to="/kontakt">LOKACIJA</Link></li>
            
            {user?.role === "Guest" && (
              <li><Link to="/guest">KORPA</Link></li>
            )}
            {user?.role === "Admin" && (
              <li><Link to="/admin">ADMIN PANEL</Link></li>
            )}

            {user ? (
              <>
                <li><span>Dobrodošli, {user.username} ({user.role})</span></li>
                <li>
                  <a href="#" onClick={() => {
                    localStorage.removeItem("loggedInUser");
                    window.location.reload();
                  }}>
                    ODJAVA
                  </a>
                </li>
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
