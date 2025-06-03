import React from "react";

export default function Admin() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dobrodošli na Admin Panel</h1>
      <p>Prijavljeni ste kao: <strong>{user?.username}</strong></p>
      <p>Email: <strong>{user?.email}</strong></p>
      <p>Uloga: <strong>{user?.role}</strong></p>

      <hr />

      {/* Ovdje možete dodati više admin funkcija */}
      <h2>Upravljanje sadržajem</h2>
      <ul>
        <li>Pregled i uređivanje korisnika</li>
        <li>Dodavanje ili uklanjanje proizvoda</li>
        <li>Pregled poruka i komentara</li>
      </ul>
    </div>
  );
}
