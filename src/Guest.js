import { useCart } from "./CartContext";

export default function Guest() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="guest-container">
      <h2>Dobrodošli!</h2>
      <hr />
      
      {cart.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul className="cart-list">
  {cart.map((item, index) => (
    <li key={index} className="cart-card">
      <div className="cart-card-content">
        <div className="item-name">{item.naziv}</div>
        <div className="item-description">{item.opis}</div>
        <div className="item-price">{item.cijena} KM</div>
      </div>
      <button onClick={() => removeFromCart(index)}>Ukloni</button>
    </li>
  ))}
</ul>

      )}
    </div>
  );
}
