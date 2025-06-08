import React, { useState } from 'react';
import { useProducts } from './ProductContext';

const AdminPanel = () => {
  const { products, addProduct, removeProduct } = useProducts();

  const [newProduct, setNewProduct] = useState({
    name: '',
    img: '',
    opis: '',
    cijena: '',
    category: 'palacinke'  
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.cijena) return;

    addProduct({ 
      ...newProduct, 
      cijena: parseFloat(newProduct.cijena) 
    });

    setNewProduct({ name: '', img: '', opis: '', cijena: '', category: 'palacinke' });
  };

  return (
    <div className="container admin-panel">
      <h2>Admin Panel - Upravljanje Proizvodima</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input name="name" value={newProduct.name} onChange={handleChange} placeholder="Naziv" required />
        <input name="img" value={newProduct.img} onChange={handleChange} placeholder="URL slike" />
        <input name="opis" value={newProduct.opis} onChange={handleChange} placeholder="Opis" />
        <input name="cijena" value={newProduct.cijena} onChange={handleChange} placeholder="Cijena" required type="number" step="0.01" />

        <select name="category" value={newProduct.category} onChange={handleChange}>
          <option value="palacinke">Palačinke</option>
          <option value="waffle">Waffle</option>
          <option value="torta">Torta</option>
          <option value="pica">Pica</option>
        </select>

        <button type="submit">Dodaj Proizvod</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.cijena} KM ({p.category})
            <button onClick={() => removeProduct(p.id)} className="ml-2 text-red-500">Ukloni</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
