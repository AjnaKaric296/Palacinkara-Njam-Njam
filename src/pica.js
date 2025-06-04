import React from 'react';

const Pica = () => {
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
      <h1>Pića</h1>
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

export default Pica;
