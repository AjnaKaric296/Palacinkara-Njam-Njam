# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Palačinkara Njam-Njam

## Kratki opis teme

Ova web aplikacija predstavlja interaktivnu platformu za pregled, naručivanje i upravljanje ponudom poslastica poput palačinaka, waffli, torti i pića. Projekt je razvijen u okviru timskog rada, koristeći moderni React frontend u kombinaciji sa json-server backendom za pohranu podataka.

**Funkcionalnosti:**
- Pregled ponude bez registracije
- Registrovani korisnici mogu dodavati proizvode u korpu i naručivati
- Admin korisnici mogu dodavati, ažurirati i uklanjati proizvode

Cilj je jednostavno korisničko iskustvo za posjetioce i efikasno upravljanje menijem za admine.

---

## Tehnologije korištene u radu

### React
- Funkcionalne komponente i hooks (useState, useEffect)
- React Router za SPA navigaciju
- Zaštita ruta (RequireAdmin)

### Context API
- ProductContext i CartContext za globalno upravljanje stanjem

### JavaScript (ES6+)
- Destrukturiranje, arrow funkcije, async/await, regex

### HTML5 i CSS3
- Semantički HTML5
- Moderni CSS za layout i responzivnost

### Integracija Google Maps
- Google Maps iframe za prikaz lokacije

### Local Storage
- Pohrana korisničkih podataka i uloga

### Ostali alati
- Create React App
- NPM

---

## Opis strukture projekta (mapa/fajlova)

- **Root folder**: `palacinkara-njam-njam`
- **node_modules/**: biblioteke
- **public/**: statični fajlovi + slike
- **src/**: sav izvorni kod
  - Komponente po funkciji
  - Context fajlovi
  - `App.js`
  - CSS fajlovi
- **Konfiguracioni fajlovi:**
  - `.gitignore`, `db.json`, `package.json`

Modularna i organizovana struktura omogućava jednostavno održavanje.

---

## Funkcionalnosti i opis dizajna

### Funkcionalnosti
- Fiksni navigacioni meni
- Hero sekcija sa fiksiranom pozadinom
- "O nama" sekcija
- Sekcija događaja sa hover efektima
- Galerija slika
- Validirana kontakt forma
- Admin panel
- Dinamične kartice proizvoda i korpa
- Fiksno dugme za naručivanje

### Opis dizajna
- Fleksibilni layouti (Flexbox, Grid)
- Jasna hijerarhija vizuelnih elemenata
- Efekti senki i prelaza
- Pozadinske slike

### Paleta boja
- **Žuta:** #F4C542, #fcd34d, #c7990f
- **Tamno siva / crna:** #333333, #000000
- **Bijela:** #ffffff, #fffbea
- **Neutralne sive**

### Fontovi
- **Lexend** (Google Fonts)
- Fallback: sans-serif

---

## Uloge korisnika

### Admin (Administrator)
- Pristup admin panelu
- Dodavanje/uređivanje proizvoda

### Guest (Posjetilac / Neregistrovani korisnik)
- Pregled javnih sekcija
- Pregled ponude
- Slanje poruka
- Registracija / prijava

### Registrovani korisnik
- Prijava
- Uređivanje profila
- Dodavanje proizvoda u korpu

---

## Kratki opis doprinosa svakog člana tima

### 👩‍💻 Tajra Tašić & Ajna Karić
- Frontend & Backend funkcionalnosti
- Registracija, prijava, sistem uloga
- Prikaz proizvoda, narudžbi, kontakt poruka
- Validacija unosa, fetch/Axios zahtjevi

### 🎨 Aida Begagić
- Dizajn i CSS stilizacija
- Vizuelni izgled i UI/UX
- Responzivnost

### 🤝 Zajednički doprinos
- Planiranje, prototipiranje
- Fleksibilna saradnja i podrška
- Testiranje i optimizacija

---

## Upute za pokretanje projekta

1. **Kloniranje repozitorija**
```bash
git clone <repo-url>
```

2. **Instalacija zavisnosti**
```bash
npm install
```

3. **Pokretanje React aplikacije**
```bash
npm start
```

4. **Pokretanje json-server baze**
```bash
json-server --watch db.json --port 3001
```

**Napomena:** koristiti dva terminala (React + json-server)

---

## Snimci ekrana radne aplikacije

- Home Page
- O nama
- Odabir poslastica
- Palačinke
- Waffli
- Torte
- Pića
- Prijava
- Registracija
- Guest ponude
- Guest korpa
- Admin panel

---

Univerzitet u Zenici  
Politehnički fakultet  
Softverski inženjering  
Operativni sistemi i računarstvo u oblaku  

Članovi tima:  
**Tašić Tajra, Karić Ajna, Begagić Aida**  

Zenica 2025.

