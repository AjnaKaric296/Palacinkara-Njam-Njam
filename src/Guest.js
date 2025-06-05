import { useCart } from "./CartContext";

export default function Guest() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Dobrodošli, goste!</h2>
      <hr />
      <h3>Stavke u korpi:</h3>
      {cart.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.naziv} - {item.cijena} KM{" "}
              <button onClick={() => removeFromCart(index)}>Ukloni</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
