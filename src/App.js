// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Poslastice from "./poslastice";
import Admin from "./Admin";
import Layout from "./layout";
import "./App.css";
import Palacinke from './palacinke';
import Waffle from './waffle';
import Torte from './torte';
import Pica from './pica';
import Kontakt from "./kontakt";
import Guest from "./Guest";
import { CartProvider } from "./CartContext"; 



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
      <section id="o-nama" className="o-nama-wrap">
  <div className="o-nama">
    <h1>Dobrodošli u palačinkarnicu <span>Njam Njam</span>!</h1>
    <p>
      Uživajte u najukusnijim palačinkama i wafflima u gradu – pripremljeni s ljubavlju, svaki dan!
      Naš meni pažljivo je osmišljen kako bi zadovoljio različite ukuse, od tradicionalnih slatkih palačinki
      punjenih čokoladnim kremama, plazmom, orasima i voćem, do kiselkastih kombinacija za one koji više vole konkretne zalogaje.
      Posebno se ponosimo našim specijalitetima – wafflima, koji su osvojili srca mnogih gostiju
      i donijeli novu dimenziju slatkog uživanja.
<br />
      Naša priča počela je iz jednostavne, ali snažne ideje da ljubav prema palačinkama pretvorimo u jedinstveno mjesto gdje će se svi osjećati kao kod kuće.
      Od skromnih početaka, danas smo postali omiljeno mjesto za slatke zalogaje, gdje svaki recept nosi pečat domaće kreativnosti.

      

      Svaki desert priprema se svježe, s posebnom pažnjom, jer vjerujemo da se ljubav prema hrani prepoznaje u svakom zalogaju.

      Pored svakodnevnog uživanja, organizujemo i proslave rođendana, dječijih zabava i drugih posebnih trenutaka uz dekoraciju, slatki sto i osmijehe naših maskota.

      Uživajte u atmosferi gdje se slatki snovi pretvaraju u stvarnost, jer kod nas svaki dan može biti slavlje.

      Dobrodošli u Njam Njam – mjesto gdje palačinke pričaju svoju priču.<br />
      Iza Njam Njam palačinkarnice stoji Sefir, mladi entuzijasta iz Zenice s velikom ljubavlju prema kulinarstvu i slatkim delicijama. Njegov san nije bio samo otvoriti lokal – već stvoriti toplu priču, mjesto susreta, okusa i osmijeha.
Inspiraciju je pronašao u putovanjima, raznim svjetskim kuhinjama, ali i u domaćim, porodičnim receptima koji nose posebnu emociju.
Njam Njam je mnogo više od deserta. To je emocija, uspomena i miris koji podsjeća na djetinjstvo. Hvala vam što ste dio naše priče i što svaki dan dijelite s nama.
    </p>
  </div>

  <img src="/images/maskota.png" alt="Maskota" className="fixed-logo" />
</section>
<section id="dogadjaji" className="dogadjaji-wrap">
  <div className="dogadjaji">

    <div className="dogadjaj">
      <h3>Nagradne igre </h3>
      <img src="/images/nagradna.jpg" alt="Otvaranje palačinkarnice" />
      <img src="/images/nagradnaaaaaa.jpg" alt="Otvaranje palačinkarnice" />
      <img src="/images/ponuda.jpg" alt="Otvaranje palačinkarnice" />
    </div>

    <div className="dogadjaj">
      <h3>Besplatna dostava/korpa</h3>
      <img src="/images/korpa1.jpg" alt="Dječija zabava" />
      <img src="/images/dostava.jpg" alt="Dječija zabava" />
      <img src="/images/korpa2.jpg" alt="Dječija zabava" />
    </div>

  </div>
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
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="poslastice" element={<Poslastice />} />
          <Route path="/palacinke" element={<Palacinke />} /> 
          <Route path="/waffle" element={<Waffle />} /> 
          <Route path="/torte" element={<Torte />} /> 
          <Route path="/pica" element={<Pica />} /> 
          <Route path="login" element={<Login />} />
          <Route path="guest" element={<Guest />} />

          <Route path="register" element={<Register />} />
          <Route path="kontakt" element={<Kontakt />} /> 
          <Route path="admin" element={
            <RequireAdmin>
              <Admin />
            </RequireAdmin>
          } />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router></CartProvider>
  );
}
