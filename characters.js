class Character {
    constructor(name, role, description, x, y) {
        this.name = name;
        this.role = role;
        this.description = description;
        this.x = x;
        this.y = y;
    }

    introduce() {
        return `${this.name}, the ${this.role}: ${this.description}`;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 32, 32); // Simple representation of the character
    }

    interact() {
        if (this.role === "Merchant") {
            startTrading();
        } else {
            checkForTask(this);
        }
    }
}

const protagonist = new Character("Protagonist", "Player", "The player character who has lost their memory.", 100, 100);
const townElder = new Character("Jack", "Town Elder", "A wise figure who provides guidance and tasks.", 200, 200);
const merchant = new Character("Ruby", "Merchant", "A fiery redhead who runs the general store.", 300, 300);
const blacksmith = new Character("Darren", "Blacksmith", "A bronze man working with iron.", 400, 400);
const bankers = new Character("George and Beth", "Bankers", "They manage the currency exchange and offer financial advice.", 500, 500);

const characters = [protagonist, townElder, merchant, blacksmith, bankers];

function drawCharacters(ctx) {
    characters.forEach(character => {
        character.draw(ctx);
    });
}
