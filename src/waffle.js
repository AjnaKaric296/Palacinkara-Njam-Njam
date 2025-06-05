import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Waffle = () => {
  const { addToCart } = useCart(); // ✅ dodano!

  const cards = [
    {
      name: 'Waffle bueno',
      img: '/images/w1.jpeg',
      opis: 'Waffle, čoko preliv, bijela čokolada preliv, Bueno čokoladica, sladoled',
      cijena: '6 KM'
    },
    {
      name: 'Waffle pistacija',
      img: '/images/waffle.jpg',
      opis: 'Waffle 2x, pistacio i čoko krem, pistacija, šlag',
      cijena: '6 KM'
    },
    {
      name: 'Waffle Ferrero ',
      img: '/images/w2.jpg',
      opis: 'Waffle 2x, nudeno krem, lješnjak, sladoled',
      cijena: '6 KM'
    },
    {
      name: 'Waffle čoko fantazija',
      img: '/images/w3.jpeg',
      opis: 'Waffle premium čokolada, Srebrn malina/kupina, banana',
      cijena: '6 KM'
    },
    {
      name: 'Waffle plazma',
      img: '/images/w4.jpeg',
      opis: 'Waffle, Nutella, plazma u mlijeku, banana, sladoled',
      cijena: '6 KM'
    },
  ];

  return (
    <div className="container">
      <h1>Waffle</h1>
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
                  cijena: parseFloat(card.cijena), // "6 KM" → 6
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

export default Waffle;
