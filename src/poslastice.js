// src/Poslastice.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './poslastice.css';

const Poslastice = () => {
  const navigate = useNavigate();

  const cards = [
    { name: 'Palačinke', img: '/images/palacinke.jpg', path: '/palacinke' },
    { name: 'Waffle', img: '/images/waffle.jpg', path: '/waffle' },
    { name: 'Torte', img: '/images/torte.jpg', path: '/torte' },
    { name: 'Pića', img: '/images/pica.jpg', path: '/pica' }
  ];

  return (
    <div className="container">
      <h1>Odaberi meni</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(card.path)}

            
            
          >
            <img src={card.img} alt={card.name} className="card-image" />
            <div className="card-title">{card.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poslastice;
