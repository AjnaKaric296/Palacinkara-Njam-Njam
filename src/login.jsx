import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3001/users?email=${form.email}`);
    const users = await res.json();

    if (users.length === 0) {
      setMessage("Korisnik ne postoji.");
      return;
    }

    const user = users[0];

    if (user.password !== form.password) {
      setMessage("Pogrešna lozinka.");
      return;
    }

    // Spremi u localStorage kao trenutno prijavljenog korisnika
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    setMessage("Prijava uspješna!");
    // Preusmjeri na home ili drugu stranicu
    navigate("/");
    window.location.reload(); // opcionalno da osvježiš prikaz u App-u
  };

  return (
    <div>
      <h2>Prijava</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Prijavi se</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
