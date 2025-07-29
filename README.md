# Verambtelijkt – Pensioen Aftelwebapp voor Kees

Een statische webpagina met een ambtenarenvibe uit 2005, gebouwd voor het aftellen naar pensioen.

## 🏛️ Kenmerken

### Algemene Stijl
- **Ambtenarenvibe uit 2005**: Grijstinten, beige, olijfgroen en dof blauw
- **Lettertypes**: Times New Roman voor titels, Arial voor bodytekst, Verdana voor knoppen
- **Layout**: Intranetpagina-stijl met veel kaders, randjes en functionele blokken
- **Interactie**: Muiscursor verandert in "handje" bij hover

### ⏳ Aftelklok
- **Centraal geplaatst**: Visueel dominante countdown timer
- **Tijdseenheden**: Jaren, maanden, dagen, uren, minuten en seconden
- **Lettertype**: Courier New voor het dossiergevoel
- **Animatie**: Subtiele fade-effecten tussen tijdseenheden

### 🧩 Tegeltjeswijsheid
- **4 Delfts blauwe tegels**: Klassieke ambtenarenspreuken
- **Automatische rotatie**: Elke 30 seconden wisselen de teksten
- **Spreuken**: 20 verschillende ambtenarenwijsheid-teksten
- **Overgang**: Subtiele fade-effecten bij het wisselen

### 🕹️ Spellen
- **4 Klassieke spellen**: Mijnenveger, Patience, Freecell, Tetris
- **Modal vensters**: Spellen openen in pop-up vensters
- **Retro uitstraling**: Windows 95-stijl knoppen en interface

### 📜 Footer
- **Beleidskader disclaimer**: Humoristische tekst over WCAG 2.1 en BIO

## 🚀 Installatie en Gebruik

### Lokale ontwikkeling
1. Download alle bestanden naar een map
2. Open `index.html` in een webbrowser
3. De app start automatisch

### Pensioendatum aanpassen
Om de pensioendatum te wijzigen, bewerk `script.js` regel 6:

```javascript
this.retirementDate = new Date('2030-12-31T17:00:00'); // Pas deze datum aan
```

### Webserver (optioneel)
Voor de beste ervaring, serveer de bestanden via een lokale webserver:

```bash
# Met Python 3
python -m http.server 8000

# Met Node.js (npx)
npx serve .

# Met PHP
php -S localhost:8000
```

Ga vervolgens naar `http://localhost:8000`

## 📁 Bestandsstructuur

```
verambtelijkt/
├── index.html          # Hoofdbestand met HTML-structuur
├── styles.css          # CSS-styling met 2005 ambtenarenvibe
├── script.js           # JavaScript functionaliteit
└── README.md           # Deze documentatie
```

## 🎨 Aanpassingen

### Kleuren aanpassen
De kleuren zijn gedefinieerd in `styles.css`:
- **Olijfgroen**: `#4a5d23`
- **Dof blauw**: `#4682b4`
- **Grijstinten**: `#f5f5f5`, `#cccccc`, etc.

### Tegeltjeswijsheid uitbreiden
Voeg nieuwe spreuken toe aan de `wisdoms` array in `script.js`:

```javascript
this.wisdoms = [
    "Nieuwe spreuk hier",
    // ... bestaande spreuken
];
```

### Spellen wijzigen
Pas de `gameUrls` object aan in `script.js`:

```javascript
const gameUrls = {
    nieuwspel: 'https://nieuwe-spel-url.com/',
    // ... bestaande spellen
};
```

## 🌐 Browser Compatibiliteit

- **Moderne browsers**: Chrome, Firefox, Safari, Edge
- **JavaScript**: Vereist voor alle functionaliteit
- **CSS Grid/Flexbox**: Voor responsive layout
- **ES6 Classes**: Voor JavaScript functionaliteit

## 🎯 Functionaliteiten

### Aftelklok
- Real-time countdown naar pensioendatum
- Automatische update elke seconde
- Feestelijke melding bij bereiken pensioendatum

### Tegeltjeswijsheid
- 20 verschillende ambtenarenspreuken
- Automatische rotatie elke 30 seconden
- Fade-effecten bij wisselen

### Spellen
- Externe links naar klassieke spellen
- Modal vensters voor betere gebruikerservaring
- Sluitbare pop-ups

## 🔧 Technische Details

### CSS Features
- CSS Grid voor responsive layout
- Flexbox voor countdown timer
- CSS Transitions voor animaties
- Media queries voor mobiele ondersteuning

### JavaScript Features
- ES6 Classes voor modulaire code
- setInterval voor real-time updates
- Event listeners voor interactie
- DOM manipulation voor dynamische content

## 📱 Responsive Design

De app is volledig responsive en werkt op:
- Desktop computers
- Tablets
- Smartphones
- Verschillende schermresoluties

## 🎉 Easter Eggs

- Check de browser console voor speciale berichten
- Probeer de pijltjestoetsen voor retro gaming vibes
- Hover over verschillende elementen voor verrassende effecten

## 📄 Licentie

Deze app is gemaakt voor persoonlijk gebruik. Alle externe spellen zijn eigendom van hun respectievelijke eigenaren.

---

**Gemaakt met ❤️ voor de ambtenarenwereld van 2005** 