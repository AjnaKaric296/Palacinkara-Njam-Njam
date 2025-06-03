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
      <section id="lokacija" className="lokacija">
        <h3>Pronađite nas na ovoj lokaciji</h3>
        <img src="/images/Vector.png" alt="Vector" />
        <h2>Stara čaršija, Zenica 72 000</h2>
        <div className="mapa">
        <h3>Naša lokacija</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.359353530887!2d17.908285275374123!3d44.199664716917425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee24090d42bb3%3A0x44c25927a8a37fd6!2sPala%C4%8Dinkarnica%20Njam%20Njam!5e0!3m2!1sen!2sba!4v1748958109293!5m2!1sen!2sba" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </section>
    </>
  );
}
