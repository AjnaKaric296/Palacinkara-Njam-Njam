import React, { useState, useEffect } from "react";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const adminEmail = "admin@example.com";

 
  useEffect(() => {
    document.body.classList.add("register-page");
    return () => {
      document.body.classList.remove("register-page");
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const role = form.email === adminEmail ? "Admin" : "Guest";

    const resCheck = await fetch(`http://localhost:3001/users?email=${form.email}`);
    const existingUsers = await resCheck.json();

    if (existingUsers.length > 0) {
      setMessage("Korisnik s ovim emailom već postoji.");
      return;
    }

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
    <div className="register-container">
      <div className="register-left"></div>
      <div className="register-right">
        <h2>Postanite dio naše priče!</h2>
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
            placeholder="E-mail adresa"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Šifra"
            required
          />
          <button type="submit">Registrirajte se</button>
          
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
