import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Torte = () => {
  const { addToCart } = useCart();
  const cards = [
    {
      name: 'Njam njam torta - 6 palačinaka',
      img: '/images/torte.jpg',
      
      cijena: '45 KM'
    },
    {
      name: 'Njam njam torta - 8 palačinaka',
      img: '/images/torte.jpg',
      opis: 'Krem, jagoda, biskvit',
      cijena: '55 KM'
    }
  ];

    return (
    <div className="container">
      <h1>Palačinke</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={card.name} className="card-image" />
            <div className="card-title">{card.name}</div>
            <div className="card-description">{card.opis}</div>
            <div className="card-price">{card.cijena}</div>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 mt-2 rounded"
              onClick={() =>
                addToCart({
                  id: index + 100,
                  naziv: card.name,
                  cijena: parseFloat(card.cijena), // '6 KM' → 6
                })
              }
            >
              Dodaj u korpu
            </button>
          </div>
        ))}
      </div>

      <Link to="/Guest">
        <button className="naruci-btn-fix">Pogledaj korpu</button>
      </Link>
    </div>
  );
};

export default Torte;
