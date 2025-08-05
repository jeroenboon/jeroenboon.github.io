// Ambtenaar van de Maand functionality
class AmbtenaarVanDeMaand {
    constructor() {
        this.ambtenarenVanDeMaand = [
            {
                naam: "Marga Klompé",
                titel: "Minister van Maatschappelijk Werk (1956–1963)",
                beschrijving: "Eerste vrouwelijke minister van Nederland en icoon van de verzorgingsstaat.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Klomp%C3%A9%2C_dr._Marga_A._M._-_SFA001011541.jpg/250px-Klomp%C3%A9%2C_dr._Marga_A._M._-_SFA001011541.jpg"
            },
            {
                naam: "Pieter Winsemius",
                titel: "Minister van Volkshuisvesting, Ruimtelijke Ordening en Milieubeheer (1982–1986, 2006–2007)",
                beschrijving: "Oud-minister en strategisch denker op het gebied van duurzaamheid en beleid.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pieter_Winsemius_%281982%29.jpg/250px-Pieter_Winsemius_%281982%29.jpg"
            },
            {
                naam: "Ank Bijleveld",
                titel: "Minister van Defensie (2017–2021), Commissaris van de Koning",
                beschrijving: "Degelijke bestuurder met een lange staat van dienst in overheid en bestuur.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Ank_Bijleveld_%28cropped%29.jpg"
            },
            {
                naam: "Thom de Graaf",
                titel: "Vicepresident Raad van State, oud-minister en burgemeester",
                beschrijving: "Voorvechter van bestuurlijke vernieuwing en nuchter overheidsbeleid.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/ThomdeGraaf2018.jpg"
            },
            {
                naam: "Alexandra van Huffelen",
                titel: "Staatssecretaris van Koninkrijksrelaties en Digitalisering",
                beschrijving: "Pleitbezorger van de menselijke maat in de uitvoeringspraktijk.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/220107Alexandra_van_Huffelen34_%28cropped%29.jpg/250px-220107Alexandra_van_Huffelen34_%28cropped%29.jpg"
            },
            {
                naam: "Hans Alders",
                titel: "Commissaris van de Koningin in Groningen (1996–2007)",
                beschrijving: "Polderaar pur sang, met een reputatie als compromismaker.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Hans_Alders_1986_%281%29.jpg"
            },
            {
                naam: "Diederik Samsom",
                titel: "Kabinetchef Europese Commissie (Green Deal)",
                beschrijving: "Van actievoerder tot topambtenaar in Europa.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/01._Diederik_Samsom_%287581735126%29.jpg"
            },
            {
                naam: "Tineke Netelenbos",
                titel: "Minister van Verkeer en Waterstaat (1998–2002)",
                beschrijving: "Bekend van de 'digitale snelweg' en sterk bestuurlijk profiel.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tineke_Netelenbos_1987_%281%29.jpg/960px-Tineke_Netelenbos_1987_%281%29.jpg"
            },
            {
                naam: "Guusje ter Horst",
                titel: "Minister van Binnenlandse Zaken (2007–2010)",
                beschrijving: "Oud-burgemeester, bestuurder en voorvechter van transparante overheid.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/TerHorst_Dutch_politician_kabinet_Balkenende_IV.jpg/250px-TerHorst_Dutch_politician_kabinet_Balkenende_IV.jpg"
            },
            {
                naam: "Maarten Schurink",
                titel: "Secretaris-generaal ministerie van BZK",
                beschrijving: "Ambtenaar op topniveau, bekend om zijn degelijkheid en dienstbaarheid.",
                fotoUrl: "https://www.parlement.com/sites/default/files/styles/biografie/public/biofoto/vktid89lqgyg.jpg?h=11ef856e&itok=lV6STHdA"
            },
            {
                naam: "Jan Peter Balkenende",
                titel: "Minister-president van Nederland (2002–2010)",
                beschrijving: "Symbool van zuinig bestuur, christendemocratische degelijkheid en natuurlijk de Balkenendenorm.",
                fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Jan_Pieter_Balkenende.jpg"
              }
        ];
        this.init();
    }

    init() {
        this.updateAmbtenaar();
        setInterval(() => this.updateAmbtenaar(), 2 * 60 * 1000);
    }

    updateAmbtenaar() {
        const randomIndex = Math.floor(Math.random() * this.ambtenarenVanDeMaand.length);
        const ambtenaar = this.ambtenarenVanDeMaand[randomIndex];
        
        document.getElementById('ambtenaarFoto').src = ambtenaar.fotoUrl;
        document.getElementById('ambtenaarNaam').textContent = ambtenaar.naam;
        document.getElementById('ambtenaarTitel').textContent = ambtenaar.titel;
        document.getElementById('ambtenaarBeschrijving').textContent = ambtenaar.beschrijving;
    }
}

// Pension countdown functionality
class PensionCountdown {
    constructor() {
        // Set retirement date (example: 65th birthday)
        // You can modify this date as needed
        this.retirementDate = new Date('2051-10-25T08:00:00'); // Example: December 31, 2030 at 5 PM
        this.timeElements = {
            years: document.getElementById('years'),
            months: document.getElementById('months'),
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };
        this.init();
    }

    init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const now = new Date();
        const timeLeft = this.retirementDate - now;

        if (timeLeft <= 0) {
            // Retirement has arrived!
            this.displayRetirement();
            return;
        }

        const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        this.timeElements.years.textContent = years.toString().padStart(2, '0');
        this.timeElements.months.textContent = months.toString().padStart(2, '0');
        this.timeElements.days.textContent = days.toString().padStart(2, '0');
        this.timeElements.hours.textContent = hours.toString().padStart(2, '0');
        this.timeElements.minutes.textContent = minutes.toString().padStart(2, '0');
        this.timeElements.seconds.textContent = seconds.toString().padStart(2, '0');

        // Add subtle animation for seconds
        this.timeElements.seconds.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.timeElements.seconds.style.transform = 'scale(1)';
        }, 100);
    }

    displayRetirement() {
        Object.values(this.timeElements).forEach(element => {
            element.textContent = '00';
        });
        
        const countdownContainer = document.querySelector('.countdown-container h3');
        countdownContainer.textContent = '🎉 GEFELICITEERD! Je bent met pensioen! 🎉';
        countdownContainer.style.color = '#e74c3c';
        countdownContainer.style.fontSize = '2em';
    }
}

// Wisdom tiles functionality
class WisdomTiles {
    constructor() {
        this.wisdoms = [
            "Waarom vandaag doen wat je ook morgen kunt delegeren.",
            "Geen besluit is ook een besluit.",
            "Het beleidskader is leidend.",
            "Voor elk probleem is een werkgroep.",
            "We gaan het meenemen in het vervolgproces.",
            "Eerst proces, dan inhoud.",
            "Dat ligt buiten mijn verantwoordelijkheidsgebied.",
            "We moeten dit in de juiste gremia bespreken.",
            "Er is een procedure voor.",
            "Laten we een werkgroep instellen.",
            "Dit vraagt om een integrale aanpak.",
            "We moeten de stakeholders betrekken.",
            "Dit past niet in het huidige beleidskader.",
            "We gaan dit meenemen in de volgende cyclus.",
            "Er is een format voor.",
            "Dit moeten we via de reguliere kanalen doen.",
            "We hebben een protocol voor.",
            "Dit valt onder een ander programma.",
            "We moeten de randvoorwaarden eerst in kaart brengen.",
            "Dit vraagt om een zorgvuldige afweging.",
            "We kijken eerst even wat de impact is op het bestaande proces.",
            "Daar hebben we geen mandaat voor.",
            "Daar kunnen we pas iets over zeggen na de Q2-evaluatie.",
            "Dat is een interessante gedachte voor de lange termijn.",
            "Is dit al afgestemd met de lijn?",
            "Daar hebben we nog geen bestuurlijk besluit over.",
            "Dat moet geaccordeerd worden op concernniveau.",
            "We willen geen verwachtingen wekken.",
            "Laten we dit parkeren tot na de zomerreces.",
            "Dat leggen we neer bij de uitvoeringsorganisatie.",
            "We wachten nog op input van communicatie.",
            "Dat is een politieke keuze.",
            "We moeten dit procesmatig goed borgen.",
            "Daar zit een stukje beleving in.",
            "Dat moet nog worden uitgezet in de organisatie.",
            "Dat komt terug in het MT-overleg.",
            "We willen eerst draagvlak creëren.",
            "Dit schuiven we door naar de volgende sprint.",
            "We moeten dit meenemen in de harmonisatie.",
            "Dat vereist eerst een bestuurlijke verkenning."
        ];
        this.currentIndexes = this.getRandomIndexes();
        this.init();
    }

    getRandomIndexes() {
        const indexes = [];
        const availableIndexes = Array.from({length: this.wisdoms.length}, (_, i) => i);
        
        // Selecteer 2 willekeurige indexen
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * availableIndexes.length);
            indexes.push(availableIndexes[randomIndex]);
            availableIndexes.splice(randomIndex, 1);
        }
        
        return indexes;
    }

    init() {
        this.updateTiles();
        setInterval(() => this.rotateTiles(), 30000);
    }

    updateTiles() {
        for (let i = 0; i < 2; i++) {
            const tileElement = document.getElementById(`wisdom${i + 1}`);
            tileElement.textContent = this.wisdoms[this.currentIndexes[i]];
        }
    }

    rotateTiles() {
        // Fade out effect
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => {
            tile.classList.add('fade-out');
        });

        setTimeout(() => {
            for (let i = 0; i < 2; i++) {
                this.currentIndexes[i] = (this.currentIndexes[i] + 1) % this.wisdoms.length;
            }
            this.updateTiles();

            // Fade in effect
            tiles.forEach(tile => {
                tile.classList.remove('fade-out');
                tile.classList.add('fade-in');
            });

            setTimeout(() => {
                tiles.forEach(tile => {
                    tile.classList.remove('fade-in');
                });
            }, 300);
        }, 300);
    }
}

class GameModal {
    constructor() {
        this.modal = document.getElementById('gameModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.gameFrame = document.getElementById('gameFrame');
        this.closeBtn = document.querySelector('.close');
        this.init();
    }

    init() {
        this.closeBtn.onclick = () => this.closeModal();
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        };
    }

    openGame(gameType) {
        const gameUrls = {
            minesweeper: 'https://minesweeper.online/',
            patience: 'https://www.solitr.com/',
            freecell: 'https://www.freecell.org/',
            tetris: 'https://tetris.com/play-tetris'
        };

        const gameTitles = {
            minesweeper: 'Mijnenveger',
            patience: 'Patience',
            freecell: 'Freecell',
            tetris: 'Tetris'
        };

        this.modalTitle.textContent = gameTitles[gameType];
        this.gameFrame.innerHTML = `<iframe src="${gameUrls[gameType]}" frameborder="0" width="100%" height="100%"></iframe>`;
        this.modal.style.display = 'block';
    }

    closeModal() {
        this.modal.style.display = 'none';
        this.gameFrame.innerHTML = '';
    }
}

// Global function for game buttons
function openGame(gameType) {
    gameModal.openGame(gameType);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown
    const countdown = new PensionCountdown();
    
    // Initialize wisdom tiles
    const wisdomTiles = new WisdomTiles();
    
    // Initialize ambtenaar van de maand
    const ambtenaarVanDeMaand = new AmbtenaarVanDeMaand();
    
    // Initialize game modal
    const gameModal = new GameModal();
    
    // Make gameModal globally accessible
    window.gameModal = gameModal;
    
    // Add some 2005-style effects
    addRetroEffects();
});

// Add some retro effects for the 2005 vibe
function addRetroEffects() {
    // Add hover sound effect (visual only)
    const buttons = document.querySelectorAll('button, .game-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.borderColor = '#4a5d23';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });

    // Add subtle background pattern
    const body = document.body;
    body.style.backgroundImage = `
        radial-gradient(circle at 25% 25%, rgba(74, 93, 35, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(70, 130, 180, 0.05) 0%, transparent 50%)
    `;

    // Add loading effect
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

// Add some Easter eggs for the 2005 vibe
document.addEventListener('keydown', function(e) {
    // Konami code for fun
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        console.log('🎮 Retro gaming vibes!');
    }
});

// Add some console messages for the 2005 experience
console.log('%cVerambtelijkt - Pensioen Aftelwebapp', 'color: #4a5d23; font-size: 20px; font-weight: bold;');
console.log('%cWelkom in de ambtenarenwereld van 2005!', 'color: #4682b4; font-size: 14px;');
console.log('%cDeze website is niet in overeenstemming met WCAG 2.1, BIO, of andere beleidskaders. Maar dat komt vanzelf.', 'color: #666; font-size: 12px; font-style: italic;'); 
