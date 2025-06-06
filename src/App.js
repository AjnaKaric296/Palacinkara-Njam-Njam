// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import Poslastice from "./poslastice";
import Admin from "./Admin";
import Layout from "./layout";
import "./App.css";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="top"></section>
      <section id="o-nama" className="o-nama">
        <h2>O nama</h2>
        <p>
          Naš meni pažljivo je osmišljen kako bi zadovoljio različite ukuse,
          od tradicionalnih slatkih palačinki punjenih čokoladnim kremama, plazmom,
          orasima i voćem, do kiselkastih kombinacija za one koji više vole konkretne zalogaje.
          Posebno se ponosimo našim specijalitetima – wafflima, koji su osvojili srca mnogih gostiju
          i donijeli novu dimenziju slatkog uživanja. Svaka palačinka i waffle pripremaju se s pažnjom.
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
  );
}

function RequireAdmin({ children }) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user || user.role !== "Admin") {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="poslastice" element={<Poslastice />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={
            <RequireAdmin>
              <Admin />
            </RequireAdmin>
          } />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
