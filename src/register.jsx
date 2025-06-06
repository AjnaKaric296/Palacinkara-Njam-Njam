import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const adminEmail = "admin@example.com"; // email koji je admin

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Odredi rolu
    const role = form.email === adminEmail ? "Admin" : "Guest";

    // Provjeri da li email već postoji
    const resCheck = await fetch(`http://localhost:3001/users?email=${form.email}`);
    const existingUsers = await resCheck.json();

    if (existingUsers.length > 0) {
      setMessage("Korisnik s ovim emailom već postoji.");
      return;
    }

    // Kreiraj korisnika
    const newUser = { ...form, role };

    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (res.ok) {
      setMessage("Registracija uspješna! Možete se prijaviti.");
      setForm({ username: "", email: "", password: "" });
    } else {
      setMessage("Došlo je do greške.");
    }
  };

  return (
    <div>
      <h2>Registracija</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Vaše ime"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Vaš email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Lozinka"
          required
        />
        <button type="submit">Registruj se</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
