import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useProducts } from './ProductContext';

const Waffle = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();

  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (card) => {
    addToCart({
      id: card.id,
      naziv: card.name,
      cijena: parseFloat(card.cijena),
    });
    setAddedProductId(card.id);

    // Vrati na "Dodaj u korpu" nakon 2 sekunde
    setTimeout(() => setAddedProductId(null), 2000);
  };

  // Filtriramo samo waffle proizvode po kategoriji
  const waffleProducts = products.filter(p => p.category === 'waffle');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div className="container">
      <h1>Waffle</h1>
      <div className="cards">
        {waffleProducts.map((card) => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.name} className="card-image" />
            <div className="card-title">{card.name}</div>
            <div className="card-description">{card.opis}</div>
            <div className="card-price">{card.cijena} KM</div>

            {user?.role === 'Guest' && (
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 mt-2 rounded"
                onClick={() => handleAddToCart(card)}
              >
                {addedProductId === card.id ? 'Dodano u korpu' : 'Dodaj u korpu'}
              </button>
            )}
          </div>
        ))}
      </div>

      {user?.role === 'Guest' && (
        <Link to="/Guest">
          <button className="naruci-btn-fix">Pogledaj korpu</button>
        </Link>
      )}
    </div>
  );
};

export default Waffle;
