class Character {
    constructor(name, role, description) {
        this.name = name;
        this.role = role;
        this.description = description;
    }

    introduce() {
        return `${this.name}, the ${this.role}: ${this.description}`;
    }
}

const protagonist = new Character("Protagonist", "Player", "The player character who has lost their memory.");
const townElder = new Character("Jack", "Town Elder", "A wise figure who provides guidance and tasks.");
const merchant = new Character("Ruby", "Merchant", "A fiery redhead who runs the general store.");
const blacksmith = new Character("Darren", "Blacksmith", "A bronze man working with iron.");
const bankers = new Character("George and Beth", "Bankers", "They manage the currency exchange and offer financial advice.");

const characters = [protagonist, townElder, merchant, blacksmith, bankers];

function displayCharacters() {
    const gameArea = document.getElementById('game-area');
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.textContent = character.introduce();
        gameArea.appendChild(characterElement);
    });
}

displayCharacters();
