// Copper Minigame: Fishing
function startCopperMinigame() {
    alert("Starting the Copper Minigame: Fishing!");
    let fishCaught = 0;
    for (let i = 0; i < 5; i++) {
        if (Math.random() > 0.5) {
            fishCaught++;
        }
    }
    alert(`You caught ${fishCaught} fish! You earned ${fishCaught * 10} Copper.`);
}

// Silver Minigame: Puzzle
function startSilverMinigame() {
    alert("Starting the Silver Minigame: Puzzle!");
    const puzzlePieces = ["A", "B", "C", "D"];
    const shuffledPieces = puzzlePieces.sort(() => Math.random() - 0.5);
    const userAnswer = prompt(`Arrange the pieces in order: ${shuffledPieces.join(", ")}`);
    if (userAnswer === puzzlePieces.join("")) {
        alert("Correct! You earned 50 Silver.");
    } else {
        alert("Incorrect. Try again!");
    }
}

// Gold Minigame: Treasure Hunt
function startGoldMinigame() {
    alert("Starting the Gold Minigame: Treasure Hunt!");
    const treasureLocations = ["Beach", "Forest", "Cave", "Mountain"];
    const correctLocation = treasureLocations[Math.floor(Math.random() * treasureLocations.length)];
    const userGuess = prompt(`Where do you want to search for treasure? Options: ${treasureLocations.join(", ")}`);
    if (userGuess === correctLocation) {
        alert("You found the treasure! You earned 100 Gold.");
    } else {
        alert(`No treasure found at the ${userGuess}. Try again!`);
    }
}

function displayMinigames() {
    const gameArea = document.getElementById('game-area');

    const copperButton = document.createElement('button');
    copperButton.textContent = "Start Copper Minigame";
    copperButton.onclick = startCopperMinigame;
    gameArea.appendChild(copperButton);

    const silverButton = document.createElement('button');
    silverButton.textContent = "Start Silver Minigame";
    silverButton.onclick = startSilverMinigame;
    gameArea.appendChild(silverButton);

    const goldButton = document.createElement('button');
    goldButton.textContent = "Start Gold Minigame";
    goldButton.onclick = startGoldMinigame;
    gameArea.appendChild(goldButton);
}

displayMinigames();
