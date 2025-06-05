import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './ProductContext'; // 👈 uvoziš kontekst
import { CartProvider } from './CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
  <CartProvider>
    <App />
  </CartProvider>
</ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
