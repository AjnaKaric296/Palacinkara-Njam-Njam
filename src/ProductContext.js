import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    name: 'Bounty',
    img: '/images/p1.jpg',
    opis: 'Čoko palačinak, Bounty krema, bijela čokolada, preliv bijela čokolada, Bounty čokolada',
    cijena: 6
  },
  {
    id: 2,
    name: 'Njam njam',
    img: '/images/palacinke.jpg',
    opis: 'Čoko palačina, premium čokolada, preliv čokoladni, jagode/šumsko voće, šlag',
    cijena: 6
  },
  {
    id: 3,
    name: 'Oreo',
    img: '/images/p2.jpg',
    opis: 'Čoko palačinak, Nutella, Oreo, preliv čokolada',
    cijena: 6
  },
  {
    id: 4,
    name: 'Cookie',
    img: '/images/p3.jpg',
    opis: 'Čoko palačinak, Oreo premium krem,čoko krem, Oreo cookie 3x,  preliv čokolada, sladoled',
    cijena: 8
  },
  {
    id: 5,
    name: 'Twix',
    img: '/images/p4.jpg',
    opis: 'Čoko palačinak, karamel i čokolada, keks, sladoled 2x, preliv karamel, preliv čokolada',
    cijena: 7
  },
  {
    id: 6,
    name: 'Nutellino',
    img: '/images/p5.jpg',
    opis: 'Čoko palačinak, premium čokolada, Nutella B-ready 2x, čoko preliv, sladoled, šlag',
    cijena: 7
  },
  {
    id: 7,
    name: 'Sushi',
    img: '/images/p6.jpg',
    opis: 'Čoko palačinak, Bueno krem, slani karamel, banana, šlag ',
    cijena: 6
  },
  {
    id: 8,
    name: 'Dubai',
    img: '/images/p7.jpg',
    opis: 'Klasik palačinka, Dubai specijal punjenje, pistacija, čoko preliv',
    cijena: 10
  },
  {
    id: 9,
    name: 'Pistacio',
    img: '/images/p8.jpg',
    opis: 'Klasik palačinka, pistaccio krema, bijela čokolada, pistacije, preliv pistaccio, sladoled',
    cijena: 7
  },
  {
    id: 10,
    name: 'Kinder',
    img: '/images/p9.jpg',
    opis: 'Čoko palačinak, premium bijela čokolada, Kinder čokoladice, preliv bijela čokolada, preliv čokolada',
    cijena: 6
  },
  {
    id: 11,
    name: 'Čokoladna fantazija',
    img: '/images/p10.jpg',
    opis: 'Čoko palačinak, premium čokolada, šumsko voće, banana, preliv čokolada',
    cijena: 6
  },
  {
    id: 12,
    name: 'Čoko rolnica',
    img: '/images/p11.jpg',
    opis: 'Klasik palačinak, premium čokolada, karamel nadjev, Milka Brownie 3x, karamel preliv, čoko preliv i sladoled',
    cijena: 7
  },
  {
    id: 13,
    name: 'Plazma u mlijeku',
    img: '/images/p12.jpg',
    opis: 'Klasik palačinak, Nutella, plazma u mlijeku, preliv čokolada, banana, sladoled',
    cijena: 6
  },
  {
    id: 14,
    name: 'Grande Bueno',
    img: '/images/p13.jpg',
    opis: 'Čoko palačinak, Grande latte namaz, Kinder, Bueno, preliv 3 vrste čokolade, šlag',
    cijena: 6
  },
  {
    id: 15,
    name: 'Jabukovača',
    img: '/images/p14.jpg',
    opis: 'Klasik palačinak, jabuka i vanila nadjev, preliv karamel i bijeli krem, orasi, sladoled',
    cijena: 7
  },
  // Dodaj ove proizvode na kraj initialProducts niza:
{
  id: 100,
  name: 'Waffle bueno',
  img: '/images/w1.jpeg',
  opis: 'Waffle, čoko preliv, bijela čokolada preliv, Bueno čokoladica, sladoled',
  cijena: 6
},
{
  id: 101,
  name: 'Waffle pistacija',
  img: '/images/waffle.jpg',
  opis: 'Waffle 2x, pistacio i čoko krem, pistacija, šlag',
  cijena: 6
},
{
  id: 102,
  name: 'Waffle Ferrero',
  img: '/images/w2.jpg',
  opis: 'Waffle 2x, nudeno krem, lješnjak, sladoled',
  cijena: 6
},
{
  id: 103,
  name: 'Waffle čoko fantazija',
  img: '/images/w3.jpeg',
  opis: 'Waffle premium čokolada, Srebrn malina/kupina, banana',
  cijena: 6
},
{
  id: 104,
  name: 'Waffle plazma',
  img: '/images/w4.jpeg',
  opis: 'Waffle, Nutella, plazma u mlijeku, banana, sladoled',
  cijena: 6

},
{
  id: 200,
  name: 'Njam njam torta - 6 palačinaka',
  img: '/images/torte.jpg',
  opis: 'Torta od 6 palačinaka, krem, voće', // Dodano polje opis radi konzistentnosti
  cijena: 45
},
{
  id: 201,
  name: 'Njam njam torta - 8 palačinaka',
  img: '/images/torte.jpg',
  opis: 'Krem, jagoda, biskvit',
  cijena: 55
},
{
  id: 300,
  name: 'Coca-Cola',
  img: '/images/pi1.png',
  opis: 'Klasični gazirani napitak',
  cijena: 3,
  category: 'pica'
},
{
  id: 301,
  name: 'Coca-Cola Zero',
  img: '/images/pi2.jpg',
  opis: 'Gazirani napitak bez šećera i kalorija',
  cijena: 3,
  category: 'pica'
},
{
  id: 302,
  name: 'Fanta',
  img: '/images/pi3.webp',
  opis: 'Gazirani napitak s okusom narandže',
  cijena: 3,
  category: 'pica'
},
{
  id: 303,
  name: 'Sprite',
  img: '/images/pi4.jpeg',
  opis: 'Gazirani napitak s okusom limuna i limete',
  cijena: 3,
  category: 'pica'
},
{
  id: 304,
  name: 'Schweppes',
  img: '/images/pi5.jpeg',
  opis: 'Osvježavajući gazirani napitak, razni okusi (tonik, bitter lemon)',
  cijena: 3,
  category: 'pica'
},
{
  id: 305,
  name: 'Cappy narandža',
  img: '/images/pi6.jpg',
  opis: 'Voćni sok od narandže, bez gaziranja',
  cijena: 2.5,
  category: 'pica'
},
{
  id: 306,
  name: 'Orangina',
  img: '/images/pi7.jpg',
  opis: 'Lagano gazirani napitak od narandže s pulpom',
  cijena: 3.5,
  category: 'pica'
},
{
  id: 307,
  name: 'Limona',
  img: '/images/pi8.jpeg',
  opis: 'Gazirani napitak s okusom limuna',
  cijena: 2.5,
  category: 'pica'
}


];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
