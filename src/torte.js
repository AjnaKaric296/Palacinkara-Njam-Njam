import React from 'react';

const Torte = () => {
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
      <h1>Torte</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={card.name} className="card-image" />
            <div className="card-title">{card.name}</div>
            <div className="card-description">{card.opis}</div>
            <div className="card-price">{card.cijena}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Torte;
