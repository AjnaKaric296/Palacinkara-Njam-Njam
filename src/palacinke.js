import React from 'react';
import { Link } from 'react-router-dom';      // Za Link
import { useCart } from './CartContext';      // Za useCart
import { useProducts } from './ProductContext';  // Za u

const Palacinke = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();

  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  // Filtriraj proizvode koji su samo palačinke
  const palacinke = products.filter(product => product.category === 'palacinke');

  return (
    <div className="container">
      <h1>Palačinke</h1>
      <div className="cards">
        {palacinke.map((card) => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.name} className="card-image" />
            <div className="card-title">{card.name}</div>
            <div className="card-description">{card.opis}</div>
            <div className="card-price">{card.cijena} KM</div>

            {user?.role === 'Guest' && (
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 mt-2 rounded"
                onClick={() =>
                  addToCart({
                    id: card.id,
                    naziv: card.name,
                    cijena: parseFloat(card.cijena),
                  })
                }
              >
                Dodaj u korpu
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
export default Palacinke;