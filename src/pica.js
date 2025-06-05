import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Pica = () => {
  const { addToCart } = useCart();
  const cards = [
    {
      name: 'Coca-Cola',
      img: '/images/pi1.png',
      opis: 'Klasični gazirani napitak',
      cijena: '3 KM'
    },
    {
      name: 'Coca-Cola Zero',
      img: '/images/pi2.jpg',
      opis: 'Gazirani napitak bez šećera i kalorija',
      cijena: '3 KM'
    },
     {
      name: 'Fanta ',
      img: '/images/pi3.webp',
      opis: 'Gazirani napitak s okusom narandže',
      cijena: '3 KM'
    },
     {
      name: 'Sprite ',
      img: '/images/pi4.jpeg',
      opis: 'Gazirani napitak s okusom limuna i limete',
      cijena: '3 KM'
    },
     {
      name: 'Schweppes  ',
      img: '/images/pi5.jpeg',
      opis: 'Osvježavajući gazirani napitak, razni okusi (tonik, bitter lemon).',
      cijena: '3 KM'
    },
     {
      name: 'Cappy narandža ',
      img: '/images/pi6.jpg',
      opis: 'Voćni sok od narandže, bez gaziranja',
      cijena: '2.5 KM'
    },
     {
      name: 'Orangina  ',
      img: '/images/pi7.jpg',
      opis: 'Lagano gazirani napitak od narandže s pulpom',
      cijena: '3.5 KM'
    },
    {
      name: 'Limona  ',
      img: '/images/pi8.jpeg',
      opis: 'Gazirani napitak s okusom limuna',
      cijena: '2.5 KM'
    },
    
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

export default Pica;
