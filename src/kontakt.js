import React from "react";

export default function Kontakt() {
  return (
    <>
      
      <section className="kontakt-lokacija-wrap">
  <div className="lokacija-card">
    <img src="/images/Vector.png" alt="Vector" />
    <h3>Pronađite nas na ovoj lokaciji</h3>
    <h2>Stara čaršija, Zenica 72 000</h2>
    <div className="mapa">
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.359353530887!2d17.908285275374123!3d44.199664716917425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee24090d42bb3%3A0x44c25927a8a37fd6!2sPala%C4%8Dinkarnica%20Njam%20Njam!5e0!3m2!1sen!2sba!4v1748958109293!5m2!1sen!2sba"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  <div className="kontakt-card">
    <h2>Kontaktirajte nas</h2>
    <form>
      <input type="text" placeholder="Vaše ime" required />
      <input type="email" placeholder="Vaš email" required />
      <textarea placeholder="Vaša poruka" required></textarea>
      <button type="submit">Pošalji</button>
    </form>
  </div>
</section>


    </>
  );
}
