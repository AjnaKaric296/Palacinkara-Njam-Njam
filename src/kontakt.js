import React from "react";

export default function Kontakt() {
  return (
    <>
      
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
