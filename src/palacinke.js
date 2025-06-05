import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Palacinke = () => {
  const { addToCart } = useCart();

  const cards = [
    {
      name: 'Bounty',
      img: '/images/p1.jpg',
      opis: 'Čoko palačinak, Bounty krema, bijela čokolada, preliv bijela čokolada, Bounty čokolada',
      cijena: '6 KM'
    },
    {
      name: 'Njam njam',
      img: '/images/palacinke.jpg',
      opis: 'Čoko palačina, premium čokolada, preliv čokoladni, jagode/šumsko voće, šlag',
      cijena: '6 KM'
    },
    {
      name: 'Oreo',
      img: '/images/p2.jpg',
      opis: 'Čoko palačinak, Nutella, Oreo, preliv čokolada',
      cijena: '6 KM'
    },
    {
      name: 'Cookie',
      img: '/images/p3.jpg',
      opis: 'Čoko palačinak, Oreo premium krem,čoko krem, Oreo cookie 3x,  preliv čokolada, sladoled',
      cijena: '8 KM'
    },
    {
      name: 'Twix',
      img: '/images/p4.jpg',
      opis: 'Čoko palačinak, karamel i čokolada, keks, sladoled 2x, preliv karamel, preliv čokolada',
      cijena: '7 KM'
    },
    {
      name: 'Nutellino',
      img: '/images/p5.jpg',
      opis: 'Čoko palačinak, premium čokolada, Nutella B-ready 2x, čoko preliv, sladoled, šlag',
      cijena: '7 KM'
    },
    {
      name: 'Sushi',
      img: '/images/p6.jpg',
      opis: 'Čoko palačinak, Bueno krem, slani karamel, banana, šlag ',
      cijena: '6 KM'
    },
    {
      name: 'Dubai',
      img: '/images/p7.jpg',
      opis: 'Klasik palačinka, Dubai specijal punjenje, pistacija, čoko preliv',
      cijena: '10 KM'
    },
    {
      name: 'Pistacio',
      img: '/images/p8.jpg',
      opis: 'Klasik palačinka, pistaccio krema, bijela čokolada, pistacije, preliv pistaccio, sladoled',
      cijena: '7 KM'
    },
    {
      name: 'Kinder',
      img: '/images/p9.jpg',
      opis: 'Čoko palačinak, premium bijela čokolada, Kinder čokoladice, preliv bijela čokolada, preliv čokolada',
      cijena: '6 KM'
    },
    {
      name: 'Čokoladna fantazija',
      img: '/images/p10.jpg',
      opis: 'Čoko palačinak, premium čokolada, šumsko voće, banana, preliv čokolada',
      cijena: '6 KM'
    },
    {
      name: 'Čoko rolnica',
      img: '/images/p11.jpg',
      opis: 'Klasik palačinak, premium čokolada, karamel nadjev, Milka Brownie 3x, karamel preliv, čoko preliv i sladoled',
      cijena: '7 KM'
    },
    {
      name: 'Plazma u mlijeku',
      img: '/images/p12.jpg',
      opis: 'Klasik palačinak, Nutella, plazma u mlijeku, preliv čokolada, banana, sladoled',
      cijena: '6 KM'
    },
    {
      name: 'Grande Bueno',
      img: '/images/p13.jpg',
      opis: 'Čoko palačinak, Grande latte namaz, Kinder, Bueno, preliv 3 vrste čokolade, šlag',
      cijena: '6 KM'
    },
    {
      name: 'Jabukovača',
      img: '/images/p14.jpg',
      opis: 'Klasik palačinak, jabuka i vanila nadjev, preliv karamel i bijeli krem, orasi, sladoled',
      cijena: '7 KM'
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

export default Palacinke;
