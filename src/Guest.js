import { useCart } from "./CartContext";

export default function Guest() {
  const { cart, removeFromCart } = useCart();

  // Izračunavanje ukupne cijene
  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.cijena), 0);

  return (
    <div className="guest-container">
      <h3>Stavke u korpi:</h3>
      <hr />
     {cart.length === 0 ? (
  <> 
  <img
      src="/images/empty-cart.png"
      alt="Prazna korpa"
      style={{  width: '600px', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
    />
    <p>Korpa je prazna.</p>
   
  </>
) : (
  <>
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
          <div className="total-price">
            <strong>Ukupno:</strong> {totalPrice.toFixed(2)} KM
          </div>
        </>
      )}
    </div>
  );
}
