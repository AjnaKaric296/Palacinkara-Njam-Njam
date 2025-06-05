import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // koristi isti CSS kao i register

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Dodavanje klase za izolaciju stilova
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

    try {
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

      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setMessage("Prijava uspješna!");

      if (user.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      window.location.reload();
    } catch (error) {
      console.error("Greška prilikom prijave:", error);
      setMessage("Došlo je do greške. Pokušajte ponovo.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left"></div>
      <div className="register-right">
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
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
