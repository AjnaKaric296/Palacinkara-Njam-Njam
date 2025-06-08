import React, { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Obriši error kada korisnik počne tipkati
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validacija imena
    if (!form.name.trim()) {
      newErrors.name = 'Ime je obavezno';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Ime mora imati najmanje 2 karaktera';
    }

    // Validacija emaila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email je obavezan';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Unesite valjan email';
    }

    // Validacija poruke
    if (!form.message.trim()) {
      newErrors.message = 'Poruka je obavezna';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Poruka mora imati najmanje 10 karaktera';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Ovdje ćemo dodati slanje na server u sljedećem koraku
      console.log('Forma podaci:', form);
      
      // Simulacija slanja (ukloniti u sljedećem koraku)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Poruka je uspješno poslana!');
      setForm({ name: '', email: '', message: '' });
      
      // Obriši success poruku nakon 5 sekundi
      setTimeout(() => setSubmitMessage(''), 5000);
      
    } catch (error) {
      setSubmitMessage('Greška pri slanju poruke. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Vaše ime"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Vaš email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Vaša poruka"
                rows="5"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Šalje se...' : 'Pošalji'}
            </button>
            
            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('uspješno') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}