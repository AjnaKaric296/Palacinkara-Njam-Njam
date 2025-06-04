import React from 'react';

const Waffle = () => {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Waffle;
