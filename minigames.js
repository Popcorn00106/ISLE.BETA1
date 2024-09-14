function startFishingMinigame() {
    alert("Starting the fishing minigame!");
    // Implement the fishing minigame logic here
}

function startPuzzleMinigame() {
    alert("Starting the puzzle minigame!");
    // Implement the puzzle minigame logic here
}

function displayMinigames() {
    const gameArea = document.getElementById('game-area');
    const fishingButton = document.createElement('button');
    fishingButton.textContent = "Start Fishing Minigame";
    fishingButton.onclick = startFishingMinigame;
    gameArea.appendChild(fishingButton);

    const puzzleButton = document.createElement('button');
    puzzleButton.textContent = "Start Puzzle Minigame";
    puzzleButton.onclick = startPuzzleMinigame;
    gameArea.appendChild(puzzleButton);
}

displayMinigames();
